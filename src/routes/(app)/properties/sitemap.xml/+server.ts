import { query, type Connection } from '$lib/utils/GraphQl';
import SiteMapXml from '$lib/components/seo/SiteMapXml';
import PropertiesListRoute from '$routes/(app)/properties/(list)/Route';
import PropertiesOneRoute from '$routes/(app)/properties/[identifier]/Route';
import MapRoute from '$routes/(app)/properties/map/Route';
import SearchRoute from '$routes/(app)/properties/search/Route';
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

	const first = `${url.origin}${PropertiesListRoute(null, null)}`;
	const map = `${url.origin}${MapRoute(null)}`;
	const search = `${url.origin}${SearchRoute(null)}`;
	const pages = nodes.map((node) => `${url.origin}${PropertiesOneRoute(node.propertyIdentifier)}`);

	return SiteMapXml.sitemap([first, map, search, ...pages]);
}
