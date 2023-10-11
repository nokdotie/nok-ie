import { connectionFragment, type Connection } from '$lib/GraphQl';

export type GraphQlQueryResponse = {
	data: {
		adverts: Connection<{
			propertyIdentifier: string;
		}>;
	};
};

export const graphQlQuery = `
    query($filter: AdvertsFilterInput, $first: Int, $after: String) {
        adverts(filter: $filter, first: $first, after: $after) {
			${connectionFragment(`
				propertyIdentifier
			`)}
        }
    }
`;
