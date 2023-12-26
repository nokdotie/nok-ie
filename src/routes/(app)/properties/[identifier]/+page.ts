import { query } from '$lib/GraphQl';
import { graphQlQuery, type GraphQlQueryResponse } from './GraphQl';

export function load({ params }) {
	const identifier = params.identifier;
	const variables = { identifier };
	const advert = query<GraphQlQueryResponse>(graphQlQuery, variables)
		.then((response) => response.data.advert)
		.catch(() => null);

	return { advert: advert };
}
