import { expect, test, type Page } from '@playwright/test';

const generic = async (page: Page, sitemapPath: string) => {
	test.setTimeout(5 * 60 * 1000);

	const response = await page.request.get(sitemapPath);
	const siteMap = await response.text();
	const locs = [...siteMap.matchAll(/<loc>(.*)<\/loc>/g)].map((match) => match[1]).slice(0, 5);

	expect(locs.length).toBeGreaterThan(0);
	for (const loc of locs) {
		const response = await page.request.get(loc);
		expect(response.status()).toBe(200);
	}
};

test('/sitemap.xml contains working urls', async ({ page }) => generic(page, '/sitemap.xml'));
test('/properties/sitemap.xml contains working urls', async ({ page }) =>
	generic(page, '/properties/sitemap.xml'));
test('/counties/sitemap.xml contains working urls', async ({ page }) =>
	generic(page, '/counties/sitemap.xml'));
