<script lang="ts">
	import { onMount } from 'svelte';
	import { getDefaultBounds, mapPromise } from '$lib/google/Maps';
	import { page } from '$app/stores';
	import { SearchFilters } from '../search/SearchFilters';
	import { query } from '$lib/GraphQl';
	import { graphQlQuery, type GraphQlQueryResponse } from '../(list)/GraphQl';
	import PropertyRoute from '../[identifier]/Route';

	const searchFilters = SearchFilters.fromUrl($page.url);

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
		});
	});
</script>

<div id="map" class="h-[calc(100vh-82px)] w-full" />
