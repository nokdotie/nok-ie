<script lang="ts">
	import { Loader } from '@googlemaps/js-api-loader';
	import { graphQlQuery, type QueryApiKeysResponse } from '../GraphQl';
	import { query } from '$lib/GraphQl';
	import { onDestroy } from 'svelte';
	import GoogleMap from './GoogleMap';
	import AdvertCard from './AdvertCard.svelte';

	type Advert = {
		advertUrl: string;
		propertyCoordinates: {
			latitude: number;
			longitude: number;
		};
	}

	const getAdverts = async (bounds: google.maps.LatLngBounds) => {
		const northEast = bounds.getNorthEast();
		const southWest = bounds.getSouthWest();

		const variables = {
			first: 100,
			filter: {
				coordinates: {
					withinRectangle: {
						northEast: { latitude: northEast.lat(), longitude: northEast.lng() },
						southWest: { latitude: southWest.lat(), longitude: southWest.lng() }
					}
				}
			}
		};

		const response = await query<QueryApiKeysResponse>(graphQlQuery, variables);
		return response.data.adverts.edges.map((edge) => edge.node);
	};

	let markers: Array<google.maps.Marker> = [];
	let clickedMarker: Advert | null = null;
	const hideMarkers = () => markers.forEach((markers) => markers.setMap(null));
	const showMarkers = (map: google.maps.Map) => markers.forEach((markers) => markers.setMap(map));

	const createMarkers = (adverts: Array<Advert>) => {
		const createMarker = (advert: Advert) => {
			const position = new google.maps.LatLng({
				lat: advert.propertyCoordinates.latitude,
				lng: advert.propertyCoordinates.longitude
			});

			const marker = new google.maps.Marker({
				position: position
			});

			marker.addListener('click', () => (clickedMarker = advert));

			return marker;
		};

		markers = adverts.map(createMarker);
	};

	const onMapIdle = (map: google.maps.Map) => async () => {
		const bounds = map.getBounds();
		if (bounds === undefined) return;

		const adverts = await getAdverts(bounds);

		hideMarkers();
		createMarkers(adverts);
		showMarkers(map);
	};

	let mapsEventListener: google.maps.MapsEventListener | null = null;
	new Loader({
		apiKey: GoogleMap.apiKey,
		version: 'beta'
	})
		.load()
		.then(async () => {
			const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;

			const map = new Map(document.getElementById('map') as HTMLElement, {
				center: GoogleMap.defaults.center,
				zoom: GoogleMap.defaults.zoom,
				disableDefaultUI: true,
				styles: GoogleMap.styles.map
			});

			mapsEventListener = map.addListener('idle', onMapIdle(map));
		});

	onDestroy(() => mapsEventListener?.remove());
</script>

<svelte:head>
	<title>NOK.IE | Properties</title>
</svelte:head>

<div class="relative">
	<div id="map" class="h-[calc(100vh-120px)]" />
	{#if clickedMarker}
		<div class="absolute bottom-0 left-0">
			<a href={clickedMarker.advertUrl}>
				<AdvertCard advert={clickedMarker} />
			</a>
		</div>
	{/if}
</div>
