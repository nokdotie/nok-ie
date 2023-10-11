import { query } from '$lib/GraphQl';
import { sitemap } from '$lib/utils/SiteMapXml';
import SiteMapRoute from '../sitemap.xml/Route';
import { type GraphQlQueryResponse, graphQlQuery } from './GraphQl';

async function getEndCursor(after: string | null): Promise<string | null> {
	const variables = {
		first: 100,
		after: after
	};

	return query<GraphQlQueryResponse>(graphQlQuery, variables).then(
		(response) => response.data.adverts.pageInfo.endCursor
	);
}

async function getEndCursors(): Promise<(string | null)[]> {
	let endCursor = null;
	const endCursors = [];

	do {
		endCursors.push(endCursor);
		endCursor = await getEndCursor(endCursor);
	} while (endCursor !== null);

	return endCursors;
}

export async function GET({ url }) {
	const endCursors = await getEndCursors();

	const urls = endCursors.map((endCursor) => `${url.origin}${SiteMapRoute({ endCursor })}`);

	return sitemap(urls);
}
