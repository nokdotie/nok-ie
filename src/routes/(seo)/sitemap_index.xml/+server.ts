import SiteMapXml from '$lib/components/seo/SiteMapXml';
import PropertiesSiteMapRoute from '$routes/(app)/properties/sitemap.xml/Route';

export async function GET({ url }) {
	return SiteMapXml.sitemapIndex([
		`${url.origin}/sitemap.xml`,
		`${url.origin}${PropertiesSiteMapRoute()}`
	]);
}
