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
    query($filter: AdvertsFilterInput, $first: Int, $after: String) {
        adverts(filter: $filter, first: $first, after: $after) {
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
	const after= url.searchParams.get('after')
	const q = url.searchParams.get('q') || ''

	const variables = {
		first: 24,
		after: after,
		filter: { address: { contains: q } },
	}

	return {
		url: { searchParams: { after: after, q: q, } },
		adverts: query<QueryApiKeysResponse>(graphQlQuery, variables).then(
			(response) => response.data.adverts
		)
	};
}
