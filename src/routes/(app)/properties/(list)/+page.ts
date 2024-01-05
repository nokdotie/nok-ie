import { query } from '$lib/GraphQl';
import { SearchFilters } from '../search/SearchFilters';
import { graphQlQuery, type GraphQlQueryResponse } from './GraphQl';

export async function load({ url }) {
	const after = url.searchParams.get('after');
	const filters = SearchFilters.fromUrl(url);

	let withinRectangle: null | {
		northEast: { latitude: number; longitude: number };
		southWest: { latitude: number; longitude: number };
	};
	if (
		filters.locationNorthEastLat &&
		filters.locationNorthEastLng &&
		filters.locationSouthWestLat &&
		filters.locationSouthWestLng
	) {
		withinRectangle = {
			northEast: {
				latitude: filters.locationNorthEastLat,
				longitude: filters.locationNorthEastLng
			},
			southWest: {
				latitude: filters.locationSouthWestLat,
				longitude: filters.locationSouthWestLng
			}
		};
	} else {
		withinRectangle = null;
	}

	const variables = {
		first: 24,
		after: after,
		filter: {
			address: { contains: filters.q },
			coordinates: { withinRectangle },
			priceInEur: {
				lessThanOrEqual: filters.priceInEurMax,
				greaterThanOrEqual: filters.priceInEurMin
			},
			bedroomsCount: {
				lessThanOrEqual: filters.bedroomsCountMax,
				greaterThanOrEqual: filters.bedroomsCountMin
			},
			bathroomsCount: {
				lessThanOrEqual: filters.bathroomsCountMax,
				greaterThanOrEqual: filters.bathroomsCountMin
			},
			sizeInSqtMtr: {
				lessThanOrEqual: filters.sizeInSqtMtrMax,
				greaterThanOrEqual: filters.sizeInSqtMtrMin
			}
		}
	};

	return {
		filters,
		adverts: query<GraphQlQueryResponse>(graphQlQuery, variables).then(
			(response) => response.data.adverts
		)
	};
}
