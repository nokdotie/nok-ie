import { query } from '$lib/GraphQl';
import { SearchFilters } from '../search/SearchFilters';
import { graphQlQuery, type GraphQlQueryResponse } from './GraphQl';

export async function load({ url }) {
	const searchFilters = SearchFilters.fromUrlSearchParams(url.searchParams);
	const after = url.searchParams.get('after');

	let withinRectangle: null | {
		northEast: { latitude: number; longitude: number };
		southWest: { latitude: number; longitude: number };
	};
	if (
		searchFilters.locationNorthEastLat &&
		searchFilters.locationNorthEastLng &&
		searchFilters.locationSouthWestLat &&
		searchFilters.locationSouthWestLng
	) {
		withinRectangle = {
			northEast: {
				latitude: searchFilters.locationNorthEastLat,
				longitude: searchFilters.locationNorthEastLng
			},
			southWest: {
				latitude: searchFilters.locationSouthWestLat,
				longitude: searchFilters.locationSouthWestLng
			}
		};
	} else {
		withinRectangle = null;
	}

	const variables = {
		first: 24,
		after: after,
		filter: {
			coordinates: { withinRectangle },
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

	return {
		after,
		adverts: query<GraphQlQueryResponse>(graphQlQuery, variables).then(
			(response) => response.data.adverts
		)
	};
}
