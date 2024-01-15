import SiteMapXml from '$lib/components/seo/SiteMapXml';
import ContactRoute from '$routes/(app)/contact/Route';
import PrivacyPolicyRoute from '$routes/(legal)/privacy-policy/Route';
import TermsOfServiceRoute from '$routes/(legal)/terms-of-service/Route';

export async function GET({ url }) {
	return SiteMapXml.sitemap([
		`${url.origin}`,
		`${url.origin}${ContactRoute()}`,
		`${url.origin}${PrivacyPolicyRoute()}`,
		`${url.origin}${TermsOfServiceRoute()}`
	]);
}
