import { sitemapIndex } from '$lib/utils/SiteMapXml';
import PropertiesSiteMapRoute from '../../(app)/properties/sitemap.xml/Route';

export async function GET({ url }) {
	return sitemapIndex([`${url.origin}/sitemap.xml`, `${url.origin}${PropertiesSiteMapRoute()}`]);
}
