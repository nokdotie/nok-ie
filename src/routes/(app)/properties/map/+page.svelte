<script lang="ts">
	import { onMount } from 'svelte';
	import { getDefaultBounds, mapPromise, markerPromise } from '$lib/utils/GoogleMaps';
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

	const advertsSearch = AdvertsSearch.fromUrlSearchParams($page.url.searchParams);

	let clickedAdvert: null | Advert = null;
	let clickedMarkerContent: null | HTMLDivElement = null;

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

	const hideAdverts = (
		map: google.maps.Map,
		mutableMarkers: google.maps.marker.AdvancedMarkerElement[]
	) =>
		mutableMarkers.forEach((marker, index) => {
			if (
				null !== marker.position &&
				undefined !== marker.position &&
				map.getBounds()?.contains(marker.position)
			)
				return;

			marker.map = null;
			mutableMarkers.splice(index, 1);
		});

	const showAdverts = async (
		map: google.maps.Map,
		mutableMarkers: google.maps.marker.AdvancedMarkerElement[],
		adverts: Advert[]
	) => {
		const markerPackage = await markerPromise

		adverts.forEach(async (advert) => {
			const latLng = new google.maps.LatLng(
				advert.propertyCoordinates.latitude,
				advert.propertyCoordinates.longitude
			);

			if (mutableMarkers.some((marker) =>
				marker.position?.lat === latLng.lat() &&
				marker.position?.lng === latLng.lng())) return;

			const markerContent = document.createElement('div');
			markerContent.textContent = priceInEurAbbrieviated(advert.advertPriceInEur);
			markerContent.className =
				'bg-neutral-100 text-neutral-800 border border-neutral-800 text-sm font-semibold leading-[1.143em] px-2.5 py-1.5 rounded';

			const marker = new markerPackage.AdvancedMarkerElement({
				map,
				position: latLng,
				content: markerContent
			});

			marker.addListener('click', () => {
				clickedMarkerContent?.classList?.remove('!bg-primary');
				clickedMarkerContent?.classList?.remove('!text-neutral-100');
				clickedMarkerContent?.classList?.remove('!border-primary');

				clickedAdvert = advert;
				clickedMarkerContent = markerContent;
				clickedMarkerContent?.classList?.add('!bg-primary');
				clickedMarkerContent?.classList?.add('!text-neutral-100');
				clickedMarkerContent?.classList?.add('!border-primary');
			});

			mutableMarkers.push(marker);
		});

		new MarkerClusterer({
			markers: mutableMarkers,
			map,
			renderer: {
				render: ({ count, position }) => {
					const markerContent = document.createElement('div');
					markerContent.textContent = `${count}`
					markerContent.className =
						'bg-neutral-800 text-neutral-100 text-lg font-semibold leading-[1.143em] px-2.5 py-1.5 rounded-full';


					return new markerPackage.AdvancedMarkerElement({
						content: markerContent,
					position,
					// adjust zIndex to be above other markers
					zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
				})
				}
		}
		});
	}

	onMount(async () => {
		const map = (await mapPromise)(document.getElementById('map') as HTMLElement, {
			disableDefaultUI: true,
			gestureHandling: 'greedy',
			mapId: 'f37cbb8cb4ea72ca'
		});

		const mutableMarkers: google.maps.marker.AdvancedMarkerElement[] = [];

		const bounds = getInitialBounds();
		map.fitBounds(bounds);

		map.addListener('idle', async () => {
			updateAdvertsSearch(map);

			const adverts = await getAdverts(advertsSearch);

			hideAdverts(map, mutableMarkers);
			showAdverts(map, mutableMarkers, adverts);
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
						{clickedAdvert.advertPriceInEur.toLocaleString('en-IE', {
							style: 'currency',
							currency: 'EUR',
							maximumFractionDigits: 0
						})}
					</div>
					<AdvertPills
						advert={clickedAdvert}
						class="origin-top-left scale-75 w-[calc(100%/0.75)] -mb-4"
					/>
				</div>
			</a>
		</div>
	{/if}
</div>

<DocumentFooter />
