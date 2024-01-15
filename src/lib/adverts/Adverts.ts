import { connectionFragment, type Connection, query } from '$lib/utils/GraphQl';
import type { AdvertsSearch } from '$lib/adverts/search/AdvertsSearch';

export type Advert = {
	propertyIdentifier: string;
	advertPriceInEur: number;
	propertyDescription: string;
	propertyAddress: string;
	propertyCoordinates: {
		latitude: number;
		longitude: number;
	};
	propertyImageUrls: Array<string>;
	propertySizeInSqtMtr: number;
	propertyBedroomsCount: number;
	propertyBathroomsCount: number;
	advertiser: null | {
		name: string;
		pictureUrl: string;
		emailAddresses: string[];
		phoneNumbers: string[];
		physicalAddresses: string[];
	};
	sources: Array<
		| {
				__typename: 'DaftIeAdvert';
				url: string;
		  }
		| {
				__typename: 'DngIeAdvert';
				url: string;
		  }
		| {
				__typename: 'MyHomeIeAdvert';
				url: string;
		  }
		| {
				__typename: 'PropertyPalComAdvert';
				url: string;
		  }
		| {
				__typename: 'SherryFitzIeAdvert';
				url: string;
		  }
		| {
				__typename: 'BuildingEnergyRatingCertificate';
				url: string;
				number?: string;
				rating?: string;
				energyRatingInKWhPerSqtMtrPerYear?: number;
				carbonDioxideEmissionsIndicatorInKgCO2PerSqtMtrPerYear?: number;
		  }
	>;
};

const graphQlAdvertFragment = `
	propertyIdentifier
	advertPriceInEur
	propertyDescription
	propertyAddress
	propertyCoordinates {
		latitude
		longitude
	}
	propertyImageUrls
	propertySizeInSqtMtr
	propertyBedroomsCount
	propertyBathroomsCount
	advertiser {
		name
		pictureUrl
		emailAddresses
		phoneNumbers
		physicalAddresses
	}
	sources {
		__typename
		... on DaftIeAdvert {
			url
		}
		... on DngIeAdvert {
			url
		}
		... on MyHomeIeAdvert {
			url
		}
		... on PropertyPalComAdvert {
			url
		}
		... on SherryFitzIeAdvert {
			url
		}
		... on BuildingEnergyRatingCertificate {
			url
			number
			rating
			energyRatingInKWhPerSqtMtrPerYear
			carbonDioxideEmissionsIndicatorInKgCO2PerSqtMtrPerYear
		}
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
