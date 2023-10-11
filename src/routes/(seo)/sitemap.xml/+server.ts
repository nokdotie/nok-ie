import { sitemap } from '$lib/utils/SiteMapXml';
import ContactRoute from '../../(app)/contact/Route';
import PrivacyPolicyRoute from '../../(legal)/privacy-policy/Route';
import TermsOfServiceRoute from '../../(legal)/terms-of-service/Route';

export async function GET({ url }) {
	return sitemap([
		`${url.origin}`,
		`${url.origin}${ContactRoute()}`,
		`${url.origin}${PrivacyPolicyRoute()}`,
		`${url.origin}${TermsOfServiceRoute()}`
	]);
}
