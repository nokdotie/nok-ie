import { connectionFragment, type Connection, query } from '$lib/utils/GraphQl';
import type { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';
import type { AdvertFacet } from '$lib/adverts/AdvertFacets';

export type Advert = {
	propertyIdentifier: string;
	advertPriceInEur: number;
	propertyDescription: string;
	propertyType: string;
	propertyAddress: string;
	propertyCoordinates: {
		latitude: number;
		longitude: number;
	};
	propertyImageUrls: Array<string>;
	propertySizeInSqtMtr: number;
	propertyBedroomsCount: number;
	propertyBathroomsCount: number;
	propertyBuildingEnergyRating: string;
	advertiser: null | {
		name: string;
		pictureUrl: string;
		emailAddresses: string[];
		phoneNumbers: string[];
		physicalAddresses: string[];
	};
	facets: Array<AdvertFacet>;
};

const graphQlAdvertFragment = `
	propertyIdentifier
	advertPriceInEur
	propertyDescription
	propertyAddress
	propertyType
	propertyCoordinates {
		latitude
		longitude
	}
	propertyImageUrls
	propertySizeInSqtMtr
	propertyBedroomsCount
	propertyBathroomsCount
	propertyBuildingEnergyRating
	advertiser {
		name
		pictureUrl
		emailAddresses
		phoneNumbers
		physicalAddresses
	}
	facets {
		url
	}
`;

export type AdvertQueryResponse = {
	data: {
		advert: Advert;
	};
};

const graphQlAdvertQuery = `
	query($identifier: String!) {
		advert(identifier: $identifier) {
			${graphQlAdvertFragment}
		}
	}
`;

export type AdvertsQueryResponse = {
	data: {
		adverts: Connection<Advert>;
	};
};
const graphQlAdvertsQuery = `
    query($first: Int, $after: String, $filter: AdvertsFilterInput) {
        adverts(filter: $filter, first: $first, after: $after) {
			${connectionFragment(graphQlAdvertFragment)}
        }
    }
`;

const graphQlAdvertsVariables = (
	first: null | number,
	after: null | string,
	advertsSearch: null | AdvertsSearch
): Record<string, unknown> => {
	let withinRectangle: null | {
		northEast: { latitude: number; longitude: number };
		southWest: { latitude: number; longitude: number };
	};

	if (
		advertsSearch?.locationNorthEastLat &&
		advertsSearch?.locationNorthEastLng &&
		advertsSearch?.locationSouthWestLat &&
		advertsSearch?.locationSouthWestLng
	) {
		withinRectangle = {
			northEast: {
				latitude: advertsSearch.locationNorthEastLat,
				longitude: advertsSearch.locationNorthEastLng
			},
			southWest: {
				latitude: advertsSearch.locationSouthWestLat,
				longitude: advertsSearch.locationSouthWestLng
			}
		};
	} else {
		withinRectangle = null;
	}

	return {
		first: first,
		after: after,
		filter: {
			coordinates: { withinRectangle },
			priceInEur: {
				lessThanOrEqual: advertsSearch?.priceInEurMax,
				greaterThanOrEqual: advertsSearch?.priceInEurMin
			},
			bedroomsCount: {
				lessThanOrEqual: advertsSearch?.bedroomsCountMax,
				greaterThanOrEqual: advertsSearch?.bedroomsCountMin
			},
			bathroomsCount: {
				lessThanOrEqual: advertsSearch?.bathroomsCountMax,
				greaterThanOrEqual: advertsSearch?.bathroomsCountMin
			},
			sizeInSqtMtr: {
				lessThanOrEqual: advertsSearch?.sizeInSqtMtrMax,
				greaterThanOrEqual: advertsSearch?.sizeInSqtMtrMin
			},
			propertyType: {
				equals: advertsSearch?.propertyType
			}
		}
	};
};

export const Adverts = {
	all: (
		first: null | number,
		after: null | string,
		advertsSearch: null | AdvertsSearch
	): Promise<AdvertsQueryResponse> => {
		const variables = graphQlAdvertsVariables(first, after, advertsSearch);
		return query<AdvertsQueryResponse>(graphQlAdvertsQuery, variables);
	},
	one: (propertyIdentifier: string): Promise<AdvertQueryResponse> =>
		query<AdvertQueryResponse>(graphQlAdvertQuery, { identifier: propertyIdentifier })
};
