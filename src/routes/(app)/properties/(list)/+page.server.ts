import { query } from '$lib/GraphQl';
import { graphQlQuery, type QueryApiKeysResponse } from '../GraphQl';

export function load({ url }) {
	const after = url.searchParams.get('after');
	const q = url.searchParams.get('q') || '';

	const variables = {
		first: 60,
		after: after,
		filter: { address: { contains: q } }
	};

	return {
		adverts: query<QueryApiKeysResponse>(graphQlQuery, variables).then(
			(response) => response.data.adverts
		)
	};
}
