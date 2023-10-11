import { sitemapIndex } from '$lib/utils/SiteMapXml';
import PropertiesSiteMapIndexRoute from '../../(app)/properties/sitemap_index.xml/Route';

export async function GET({ url }) {
	return sitemapIndex([
		`${url.origin}/sitemap.xml`,
		`${url.origin}${PropertiesSiteMapIndexRoute()}`
	]);
}
