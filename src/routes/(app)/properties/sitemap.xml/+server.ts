import { query } from '$lib/GraphQl';
import SiteMapXml from '$lib/utils/SiteMapXml';
import PropertiesRoute from '../(list)/Route';
import IdentifierRoute from '../[identifier]/Route';
import SiteMapRoute from './Route';
import { type GraphQlQueryResponse, graphQlQuery } from './GraphQl';

export async function GET({ url }) {
	const after = url.searchParams.get('after');

	const variables = {
		first: 100,
		after: after
	};

	const connection = await query<GraphQlQueryResponse>(graphQlQuery, variables).then(
		(response) => response.data.adverts
	);

	const first = after === null ? [`${url.origin}${PropertiesRoute()}`] : [];
	const page = connection.edges.map((edge) => `${url.origin}${IdentifierRoute(edge.node)}`);
	const next = connection.pageInfo.hasNextPage
		? [`${url.origin}${SiteMapRoute(connection.pageInfo)}`]
		: [];

	return SiteMapXml(first.concat(page).concat(next));
}
