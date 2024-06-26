import SiteMapXml from '$lib/components/seo/SiteMapXml';
import CountyPropertiesRoute from '$routes/(app)/counties/[identifier]/properties/Route';
import { Counties } from '$lib/counties/Counties';

export async function GET({ url }) {
	const pages = Counties.all.map(
		(county) => `${url.origin}${CountyPropertiesRoute(county.identifier, null)}`
	);

	return SiteMapXml.sitemap(pages);
}
