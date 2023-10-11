import { sitemap } from '$lib/utils/SiteMapXml';
import ContactRoute from '../../(app)/contact/Route';

export async function GET({ url }) {
	return sitemap([
		`${url.origin}`,
		`${url.origin}${ContactRoute()}`,
		`${url.origin}/privacy-policy`,
		`${url.origin}/terms-of-service`
	]);
}
