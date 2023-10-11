import { sitemap } from '$lib/utils/SiteMapXml';

export async function GET({ url }) {
	return sitemap([
		`${url.origin}`,
		`${url.origin}/privacy-policy`,
		`${url.origin}/terms-of-service`
	]);
}
