import { query } from '$lib/GraphQl';
import { graphQlQuery, type GraphQlQueryResponse } from './GraphQl';

export function load({ params }) {
	const identifier = params.identifier;
	const variables = { identifier };

	return {
		advert: query<GraphQlQueryResponse>(graphQlQuery, variables).then(
			(response) => response.data.advert
		)
	};
}
