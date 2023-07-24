import { connectionFragment, type Connection } from '$lib/GraphQl';
import type { Advert } from './Advert';

export type QueryApiKeysResponse = {
	data: {
		adverts: Connection<Advert>;
	};
};

export const graphQlQuery = `
    query($filter: AdvertsFilterInput, $first: Int, $after: String) {
        adverts(filter: $filter, first: $first, after: $after) {
			${connectionFragment(`
				advertUrl
				advertPriceInEur
				propertyAddress
                propertyCoordinates {
                    latitude
                    longitude
                }
				propertyImageUrls
				propertySizeInSqtMtr
				propertyBedroomsCount
				propertyBathroomsCount
			`)}
        }
    }
`;
