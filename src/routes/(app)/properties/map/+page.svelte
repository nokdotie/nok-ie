<script lang="ts">
	import { onMount } from 'svelte';
	import { getDefaultBounds, mapPromise } from '$lib/utils/GoogleMaps';
	import { page } from '$app/stores';
	import { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
	import { Adverts } from '$lib/adverts/Adverts';
	import PropertiesOneRoute from '$routes/(app)/properties/[identifier]/Route';
	import Meta from '$lib/components/seo/Meta.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import FilterButton from '$lib/adverts/list/FilterButton.svelte';
	import ListViewButton from '$lib/adverts/list/ListViewButton.svelte';
	import MapMarkerIcon from '$lib/components/icons/MapMarkerIcon.svelte';
	import AdvertPills from '$lib/adverts/pills/AdvertPills.svelte';
	import Image from '$lib/components/images/Image.svelte';
	import HorizontalLine from '$lib/components/HorizontalLine.svelte';
	import AdvertCard from '$lib/adverts/list/AdvertCard.svelte';

	const advertsSearch = AdvertsSearch.fromUrlSearchParams($page.url.searchParams);
	let clickedAdvert: null | Advert = null;

	const updateAdvertsSearch = (map: google.maps.Map) => {
		const bounds = map.getBounds();
		const northEast = bounds?.getNorthEast();
		advertsSearch.locationNorthEastLat = northEast?.lat() ?? null;
		advertsSearch.locationNorthEastLng = northEast?.lng() ?? null;

		const southWest = bounds?.getSouthWest();
		advertsSearch.locationSouthWestLat = southWest?.lat() ?? null;
		advertsSearch.locationSouthWestLng = southWest?.lng() ?? null;
	};

	const getInitialBounds = () =>
		advertsSearch.locationNorthEastLat &&
		advertsSearch.locationNorthEastLng &&
		advertsSearch.locationSouthWestLat &&
		advertsSearch.locationSouthWestLng
			? new google.maps.LatLngBounds(
					new google.maps.LatLng(
						advertsSearch.locationSouthWestLat,
						advertsSearch.locationSouthWestLng
					),
					new google.maps.LatLng(
						advertsSearch.locationNorthEastLat,
						advertsSearch.locationNorthEastLng
					)
			  )
			: getDefaultBounds();

	const getAdverts = (advertsSearch: AdvertsSearch) =>
		Adverts.all(100, null, advertsSearch).then((response) =>
			response.data.adverts.edges.map((edge) => edge.node)
		);

	const hideAdverts = (map: google.maps.Map, mutableMarkers: google.maps.Marker[]) =>
		mutableMarkers.forEach((marker, index) => {
			const markerPosition = marker.getPosition();
			if (
				null !== markerPosition &&
				undefined !== markerPosition &&
				map.getBounds()?.contains(markerPosition)
			)
				return;

			marker.setMap(null);
			mutableMarkers.splice(index, 1);
		});

	const showAdverts = (
		map: google.maps.Map,
		mutableMarkers: google.maps.Marker[],
		mutableInfoWindow: google.maps.InfoWindow,
		adverts: {
			advertPriceInEur: number;
			propertyIdentifier: string;
			propertyAddress: string;
			propertyCoordinates: { latitude: number; longitude: number };
			propertyImageUrls: Array<string>;
			propertyBedroomsCount: number;
			propertyBathroomsCount: number;
			propertySizeInSqtMtr: number;
		}[]
	) =>
		adverts.forEach((advert) => {
			const latLng = new google.maps.LatLng(
				advert.propertyCoordinates.latitude,
				advert.propertyCoordinates.longitude
			);

			if (mutableMarkers.some((marker) => marker.getPosition()?.equals(latLng))) return;

			const marker = new google.maps.Marker({
				map,
				position: latLng
			});

			marker.addListener('click', () => {
				clickedAdvert = advert;

				setTimeout(() => {
					const content = document.getElementById('infoWindow')?.innerHTML;
					mutableInfoWindow.setContent(content);
					mutableInfoWindow.open(map, marker);
				}, 1);
			});

			mutableMarkers.push(marker);
		});

	onMount(async () => {
		const map = (await mapPromise)(document.getElementById('map') as HTMLElement, {
			disableDefaultUI: true,
			gestureHandling: 'greedy'
		});

		const mutableMarkers: google.maps.Marker[] = [];
		const mutableInfoWindow: google.maps.InfoWindow = new google.maps.InfoWindow();

		const bounds = getInitialBounds();
		map.fitBounds(bounds);

		map.addListener('idle', async () => {
			updateAdvertsSearch(map);

			const adverts = await getAdverts(advertsSearch);

			hideAdverts(map, mutableMarkers);
			showAdverts(map, mutableMarkers, mutableInfoWindow, adverts);
		});
	});
</script>

<Meta
	index={true}
	title="Properties on a map"
	description="Properties for sale in Ireland, on a map"
	images={['https://nok.ie/android-chrome-512x512.png']}
/>

<DocumentHeader />

<div class="relative">
	<div id="map" class="h-[calc(100vh-80.5px)] md:h-[calc(100vh-84.5px)] w-full" />

	<div class="absolute top-0 right-0 mt-[10px] mr-[10px] flex gap-x-2.5">
		<ListViewButton {advertsSearch} />
		<FilterButton {advertsSearch} />
	</div>
</div>

{#if null !== clickedAdvert}
	<div id="infoWindow" class="hidden">
		<style>
			#map div[role='dialog'] {
				padding: 0;
				background: transparent;
				overflow: visible;
				box-shadow: none;
				max-width: none !important;
			}
			#map div[role='dialog'] > div {
				overflow: hidden !important;
			}
			#map div[role='dialog'] > button {
				background-color: #fff !important;
				border-radius: 50%;
				box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
				top: -12px;
				right: -12px;
				opacity: 1;
			}
		</style>

		<div class="w-[250px] h-[360px]">
			<AdvertCard advert={clickedAdvert} class="scale-75 origin-top-left w-[calc(100%/0.75)]" />
		</div>
	</div>
{/if}

<DocumentFooter />
