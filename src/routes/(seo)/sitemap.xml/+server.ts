import SiteMapXml from '$lib/utils/SiteMapXml';
import PropertiesSiteMapRoute from '../../(app)/properties/sitemap.xml/Route';

export async function GET({ url }) {
	return SiteMapXml([
		`${url.origin}`,
		`${url.origin}/privacy-policy`,
		`${url.origin}/terms-of-service`,
		`${url.origin}${PropertiesSiteMapRoute({ endCursor: null })}`
	]);
}
