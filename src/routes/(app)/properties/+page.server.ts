import { query, connectionFragment, type Connection } from '$lib/GraphQl';

type Advert = {
	advertUrl: string;
	advertPriceInEur: number;
	propertyAddress: string;
	propertyImageUrls: Array<string>;
	propertySizeInSqtMtr: number;
	propertyBedroomsCount: number;
	propertyBathroomsCount: number;
};

type QueryApiKeysResponse = {
	data: {
		adverts: Connection<Advert>;
	};
};

const graphQlQuery = `
    query($first: Int, $after: String) {
        adverts(first: $first, after: $after) {
			${connectionFragment(`
				advertUrl
				advertPriceInEur
				propertyAddress
				propertyImageUrls
				propertySizeInSqtMtr
				propertyBedroomsCount
				propertyBathroomsCount
			`)}
        }
    }
`;

export function load({ url }) {
	const after = url.searchParams.get('after');
	const variables = { first: 18, after: after };

	return query<QueryApiKeysResponse>(graphQlQuery, variables).then((response) => response.data);
}
