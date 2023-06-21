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
	function searchParamToNumber(key: string): number | null {
		const value = url.searchParams.get(key);
		const number = Number(value);

		return number === 0 && value !== '0' ? null : number;
	}

	const filter = {
		address: { contains: url.searchParams.get('address.contains') },
		priceInEur: {
			greaterThanOrEqual: searchParamToNumber('priceInEur.greaterThanOrEqual'),
			lessThanOrEqual: searchParamToNumber('priceInEur.lessThanOrEqual')
		},
		sizeInSqtMtr: {
			greaterThanOrEqual: searchParamToNumber('sizeInSqtMtr.greaterThanOrEqual'),
			lessThanOrEqual: searchParamToNumber('sizeInSqtMtr.lessThanOrEqual')
		},
		bedroomsCount: {
			greaterThanOrEqual: searchParamToNumber('bedroomsCount.greaterThanOrEqual'),
			lessThanOrEqual: searchParamToNumber('bedroomsCount.lessThanOrEqual')
		},
		bathroomsCount: {
			greaterThanOrEqual: searchParamToNumber('bathroomsCount.greaterThanOrEqual'),
			lessThanOrEqual: searchParamToNumber('bathroomsCount.lessThanOrEqual')
		}
	};
	const after = url.searchParams.get('after');
	url.searchParams.delete('after');

	const variables = { first: 18, after: after, filter: filter };

	return {
		url: {
			searchParams: url.searchParams.toString()
		},
		form: filter,
		adverts: query<QueryApiKeysResponse>(graphQlQuery, variables).then(
			(response) => response.data.adverts
		)
	};
}
