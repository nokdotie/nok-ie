import SiteMapXml from '$lib/components/seo/SiteMapXml';
import PropertiesPerCounty from '$routes/(app)/properties/counties/[identifier]/Route';
import { Counties } from '$lib/adverts/counties/Counties';

export async function GET({ url }) {
	const pages = Counties.all.map(
		(county) => `${url.origin}${PropertiesPerCounty(county.identifier, null)}`
	);

	return SiteMapXml.sitemap(pages);
}
