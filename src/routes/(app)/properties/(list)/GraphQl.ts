import { connectionFragment, type Connection } from '$lib/GraphQl';

export type GraphQlQueryResponse = {
	data: {
		adverts: Connection<{
			advertUrl: string;
			advertPriceInEur: number;
			propertyIdentifier: string;
			propertyAddress: string;
			propertyImageUrls: Array<string>;
			propertySizeInSqtMtr: number;
			propertyBedroomsCount: number;
			propertyBathroomsCount: number;
		}>;
	};
};

export const graphQlQuery = `
    query($filter: AdvertsFilterInput, $first: Int, $after: String) {
        adverts(filter: $filter, first: $first, after: $after) {
			${connectionFragment(`
				advertUrl
				advertPriceInEur
				propertyIdentifier
				propertyAddress
				propertyImageUrls
				propertySizeInSqtMtr
				propertyBedroomsCount
				propertyBathroomsCount
			`)}
        }
    }
`;
