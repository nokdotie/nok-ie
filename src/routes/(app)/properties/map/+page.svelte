<script lang="ts">
	import { onMount } from 'svelte';
	import { getDefaultBounds, mapPromise } from '$lib/google/Maps';
	import { page } from '$app/stores';
	import { SearchFilters } from '../search/SearchFilters';
	import { query } from '$lib/GraphQl';
	import { graphQlQuery, type GraphQlQueryResponse } from '../(list)/GraphQl';
	import PropertiesRoute from '../(list)/Route';
	import PropertyRoute from '../[identifier]/Route';
	import Meta from '$lib/seo/Meta.svelte';

	const searchFilters = SearchFilters.fromUrlSearchParams($page.url.searchParams);

	const updateSearchFilters = (map: google.maps.Map) => {
		const bounds = map.getBounds();
		const northEast = bounds?.getNorthEast();
		searchFilters.locationNorthEastLat = northEast?.lat() ?? null;
		searchFilters.locationNorthEastLng = northEast?.lng() ?? null;

		const southWest = bounds?.getSouthWest();
		searchFilters.locationSouthWestLat = southWest?.lat() ?? null;
		searchFilters.locationSouthWestLng = southWest?.lng() ?? null;
	};

	const getInitialBounds = () =>
		searchFilters.locationNorthEastLat &&
		searchFilters.locationNorthEastLng &&
		searchFilters.locationSouthWestLat &&
		searchFilters.locationSouthWestLng
			? new google.maps.LatLngBounds(
					new google.maps.LatLng(
						searchFilters.locationSouthWestLat,
						searchFilters.locationSouthWestLng
					),
					new google.maps.LatLng(
						searchFilters.locationNorthEastLat,
						searchFilters.locationNorthEastLng
					)
			  )
			: getDefaultBounds();

	const getGraphQlVariables = (map: google.maps.Map) => {
		const bounds = map.getBounds();
		if (!bounds) return { first: 0 };

		return {
			first: 100,
			filter: {
				coordinates: {
					withinRectangle: {
						northEast: {
							latitude: bounds.getNorthEast().lat(),
							longitude: bounds.getNorthEast().lng()
						},
						southWest: {
							latitude: bounds.getSouthWest().lat(),
							longitude: bounds.getSouthWest().lng()
						}
					}
				},
				priceInEur: {
					lessThanOrEqual: searchFilters.priceInEurMax,
					greaterThanOrEqual: searchFilters.priceInEurMin
				},
				bedroomsCount: {
					lessThanOrEqual: searchFilters.bedroomsCountMax,
					greaterThanOrEqual: searchFilters.bedroomsCountMin
				},
				bathroomsCount: {
					lessThanOrEqual: searchFilters.bathroomsCountMax,
					greaterThanOrEqual: searchFilters.bathroomsCountMin
				},
				sizeInSqtMtr: {
					lessThanOrEqual: searchFilters.sizeInSqtMtrMax,
					greaterThanOrEqual: searchFilters.sizeInSqtMtrMin
				}
			}
		};
	};

	const getAdverts = (variables: object) =>
		query<GraphQlQueryResponse>(graphQlQuery, variables).then((response) =>
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
				mutableInfoWindow.setContent(`
					<style>
						#map div[role=dialog] { padding: 0; overflow: visible; }
						#map div[role=dialog]>div { overflow: hidden !important; }
						#map div[role=dialog]>button { background-color: #fff !important; border-radius: 50%; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); top: -12px; right: -12px; opacity: 1; }
					</style>

					<div class="w-60 overflow-hidden rounded-[8px]">
						<a href="${PropertyRoute(advert)}">
							<img src="${advert.propertyImageUrls[0]}" class="w-full object-cover object-center aspect-photo" />
							<div class="px-2 pt-2 pb-2">
								<h3 class="text-lg font-medium text-gray-900 truncate">
									${advert.propertyAddress}
								</h3>
								<p class="text-sm text-gray-700">
									€${advert.advertPriceInEur.toLocaleString('en-IE')}
								</p>
							</div>
						</a>
					</div>
				`);

				mutableInfoWindow.open(map, marker);
			});

			mutableMarkers.push(marker);
		});

	onMount(async () => {
		const mapConstructor = await mapPromise;
		const map = mapConstructor(document.getElementById('map') as HTMLElement, {
			disableDefaultUI: true
		});

		const mutableMarkers: google.maps.Marker[] = [];
		const mutableInfoWindow: google.maps.InfoWindow = new google.maps.InfoWindow();

		const bounds = getInitialBounds();
		map.fitBounds(bounds);

		map.addListener('idle', async () => {
			const variables = getGraphQlVariables(map);
			const adverts = await getAdverts(variables);

			hideAdverts(map, mutableMarkers);
			showAdverts(map, mutableMarkers, mutableInfoWindow, adverts);

			updateSearchFilters(map);
		});
	});
</script>

<Meta title="Search" description="Search for properties in Ireland." />

<div class="relative">
	<a
		class="absolute z-10 top-2 right-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 text-gray-900 gap-1"
		href={PropertiesRoute(searchFilters, null)}
	>
		<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		List View
	</a>
	<div id="map" class="h-[calc(100vh-82px)] w-full" />
</div>
