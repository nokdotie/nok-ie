import { query } from '$lib/GraphQl';
import { graphQlQuery, type GraphQlQueryResponse } from './GraphQl';

export function load({ url }) {
	const after = url.searchParams.get('after');
	const q = url.searchParams.get('q') || '';

	const variables = {
		first: 24,
		after: after,
		filter: { address: { contains: q } }
	};

	return {
		filters: { q },
		adverts: query<GraphQlQueryResponse>(graphQlQuery, variables).then(
			(response) => response.data.adverts
		)
	};
}
