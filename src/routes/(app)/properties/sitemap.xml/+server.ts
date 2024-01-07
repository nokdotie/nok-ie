import { query, type Connection } from '$lib/GraphQl';
import SiteMapXml from '$lib/seo/SiteMapXml';
import PropertiesRoute from '../(list)/Route';
import IdentifierRoute from '../[identifier]/Route';
import MapRoute from '../map/Route';
import SearchRoute from '../search/Route';
import { type GraphQlQueryResponse, graphQlQuery } from './GraphQl';

async function getConnection(
	after: string | null | undefined
): Promise<Connection<{ propertyIdentifier: string }>> {
	const variables = {
		first: 100,
		after: after
	};

	return query<GraphQlQueryResponse>(graphQlQuery, variables).then(
		(response) => response.data.adverts
	);
}

async function getAllNodes(): Promise<{ propertyIdentifier: string }[]> {
	let connection = null;
	let allNodes: { propertyIdentifier: string }[] = [];

	do {
		connection = await getConnection(connection?.pageInfo?.endCursor);
		const nodes = connection.edges.map((edge) => edge.node);

		allNodes = allNodes.concat(nodes);
	} while (connection.pageInfo.hasNextPage);

	return allNodes;
}

export async function GET({ url }) {
	const nodes = await getAllNodes();

	const first = `${url.origin}${PropertiesRoute()}`;
	const map = `${url.origin}${MapRoute(null)}`;
	const search = `${url.origin}${SearchRoute(null)}`;
	const pages = nodes.map((node) => `${url.origin}${IdentifierRoute(node)}`);

	return SiteMapXml.sitemap([first, map, search, ...pages]);
}
