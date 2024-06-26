import SiteMapXml from '$lib/components/seo/SiteMapXml';
import CountyRoute from '$routes/(app)/counties/[identifier]/properties/Route';
import { Counties } from '$lib/counties/Counties';

export async function GET({ url }) {
	const pages = Counties.all.map(
		(county) => `${url.origin}${CountyRoute(county.identifier, null)}`
	);

	return SiteMapXml.sitemap(pages);
}
