import SiteMapXml from '$lib/seo/SiteMapXml';
import PropertiesSiteMapRoute from '../../(app)/properties/sitemap.xml/Route';

export async function GET({ url }) {
	return SiteMapXml.sitemapIndex([
		`${url.origin}/sitemap.xml`,
		`${url.origin}${PropertiesSiteMapRoute()}`
	]);
}
