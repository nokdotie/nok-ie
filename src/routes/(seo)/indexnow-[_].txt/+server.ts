import { query } from '$lib/utils/GraphQl';
import { graphQlQuery, type GraphQlQueryResponse } from '$routes/(seo)/indexnow-[_].txt/GraphQl';
import { error } from '@sveltejs/kit';

export async function GET({ url }) {
	const key = url.pathname.slice(1, -4);
	const isIndexNowKeyValid = await query<GraphQlQueryResponse>(graphQlQuery, { key: key }).then(
		(response) => response.data.seo.isIndexNowKeyValid
	);

	if (false === isIndexNowKeyValid) {
		error(404, 'Not found');
	}

	return new Response(key);
}
