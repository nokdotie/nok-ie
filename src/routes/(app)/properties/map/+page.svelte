<script lang="ts">
	import { onMount } from 'svelte';
	import { getDefaultBounds, mapPromise } from '$lib/google/Maps';
	import { page } from '$app/stores';
	import { SearchFilters } from '../search/SearchFilters';
	import { query } from '$lib/GraphQl';
	import { graphQlQuery, type GraphQlQueryResponse } from '../(list)/GraphQl';

	const searchFilters = SearchFilters.fromUrl($page.url);

	let markers: Array<google.maps.Marker> = [];

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

	const getAdverts = (
		variables: object
	): Promise<Array<{ propertyCoordinates: { latitude: number; longitude: number } }>> =>
		query<GraphQlQueryResponse>(graphQlQuery, variables).then((response) =>
			response.data.adverts.edges.map((edge) => edge.node)
		);

	const hideAdverts = () => {
		markers.forEach((marker) => marker.setMap(null));
		markers = [];
	};

	const showAdverts = (
		map: google.maps.Map,
		adverts: { propertyCoordinates: { latitude: number; longitude: number } }[]
	) => {
		adverts.forEach((advert) => {
			const latLng = new google.maps.LatLng(
				advert.propertyCoordinates.latitude,
				advert.propertyCoordinates.longitude
			);
			const marker = new google.maps.Marker({
				map,
				position: latLng
			});

			markers.push(marker);
		});
	};

	onMount(async () => {
		const mapConstructor = await mapPromise;
		const map = mapConstructor(document.getElementById('map') as HTMLElement, undefined);

		const bounds = getInitialBounds();
		map.fitBounds(bounds);

		map.addListener('idle', async () => {
			const variables = getGraphQlVariables(map);
			const adverts = await getAdverts(variables);
			hideAdverts();
			showAdverts(map, adverts);
		});
	});
</script>

<div id="map" class="h-[calc(100vh-82px)] w-full" />
