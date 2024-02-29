<script lang="ts">
	import { onMount } from 'svelte';
	import { getDefaultBounds, mapPromise } from '$lib/utils/GoogleMaps';
	import { page } from '$app/stores';
	import { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
	import { Adverts, type Advert } from '$lib/adverts/Adverts';
	import PropertiesOneRoute from '$routes/(app)/properties/[identifier]/Route';
	import Meta from '$lib/components/seo/Meta.svelte';
	import DocumentHeader from '$lib/components/document/DocumentHeader.svelte';
	import DocumentFooter from '$lib/components/document/DocumentFooter.svelte';
	import FilterButton from '$lib/adverts/list/FilterButton.svelte';
	import ListViewButton from '$lib/adverts/list/ListViewButton.svelte';
	import AdvertPills from '$lib/adverts/pills/AdvertPills.svelte';
	import Image from '$lib/components/images/Image.svelte';
	import { priceInEur } from '$lib/utils/Number';
	import { AdvertMapMarker } from '$lib/adverts/map/AdvertMapMarker';
	import { AdvertMapMarkerCluster } from '$lib/adverts/map/AdvertMapMarkerCluster';
	import type { MarkerClusterer } from '@googlemaps/markerclusterer';

	const advertsSearch = AdvertsSearch.fromUrlSearchParams($page.url.searchParams);

	let clickedAdvert: null | Advert = null;
	let clickedMarker: null | google.maps.marker.AdvancedMarkerElement = null;

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

	const getMarker = (advert: Advert) => {
		const marker = AdvertMapMarker.fromAdvert(advert);

		marker.addListener('click', () => {
			if (null !== clickedMarker) AdvertMapMarker.deactivate(clickedMarker);

			clickedAdvert = advert;
			clickedMarker = marker;
			AdvertMapMarker.activate(clickedMarker);
		});

		return marker;
	};

	const hideMarkers = (
		map: google.maps.Map,
		markersCache: google.maps.marker.AdvancedMarkerElement[],
		cluster: MarkerClusterer
	) => {
		markersCache.forEach((marker, index) => {
			if (AdvertMapMarker.isInBounds(map, marker)) return;

			markersCache.splice(index, 1);
			cluster.removeMarker(marker);
		});
	};

	const showMarkers = async (
		markersCache: google.maps.marker.AdvancedMarkerElement[],
		cluster: MarkerClusterer,
		newMarkers: google.maps.marker.AdvancedMarkerElement[]
	) => {
		newMarkers.forEach(async (marker) => {
			if (markersCache.some((existing) => AdvertMapMarker.equals(existing, marker))) return;

			markersCache.push(marker);
			cluster.addMarker(marker);
		});
	};

	onMount(async () => {
		const map = (await mapPromise)(document.getElementById('map') as HTMLElement, {
			disableDefaultUI: true,
			gestureHandling: 'greedy',
			mapId: 'f37cbb8cb4ea72ca'
		});

		const cluster = AdvertMapMarkerCluster.new();
		cluster.setMap(map);

		const markersCache: google.maps.marker.AdvancedMarkerElement[] = [];

		const bounds = getInitialBounds();
		map.fitBounds(bounds);

		map.addListener('idle', async () => {
			hideMarkers(map, markersCache, cluster);

			updateAdvertsSearch(map);
			const adverts = await getAdverts(advertsSearch);
			const newMarkers = adverts.map(getMarker);

			showMarkers(markersCache, cluster, newMarkers);
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
	<div
		id="map"
		class="h-[calc(100vh-80.1px)] sm:h-[calc(100vh-86.1px)] md:h-[calc(100vh-96.1px)] lg:h-[calc(100vh-104.1px)] w-full"
	/>

	<div class="absolute top-0 right-0 mt-[10px] mr-[10px] flex gap-x-2.5">
		<ListViewButton {advertsSearch} />
		<FilterButton {advertsSearch} />
	</div>

	{#if null !== clickedAdvert}
		<div class="absolute bottom-0 m-2">
			<a
				href={PropertiesOneRoute(clickedAdvert.propertyIdentifier)}
				class="flex items-center bg-neutral-100 overflow-hidden rounded-xl"
			>
				<Image
					src={clickedAdvert.propertyImageUrls[0]}
					alt=""
					class="object-cover object-center aspect-square w-[120px]"
				/>
				<div class="px-4 sm:px-6">
					<div class="text-neutral-800 text-xl md:text-[22px] font-bold leading-[1.364em] mb-3">
						{priceInEur(clickedAdvert.advertPriceInEur)}
					</div>
					<AdvertPills
						advert={clickedAdvert}
						class="origin-top-left scale-75 sm:scale-90 md:scale-100 w-[calc(100%/0.75)] sm:w-[calc(100%/0.90)] md:w-auto -mb-4"
					/>
				</div>
			</a>
		</div>
	{/if}
</div>

<DocumentFooter />
