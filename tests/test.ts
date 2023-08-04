import { expect, test } from '@playwright/test';

test('index page redirects to /properties', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveURL('/properties');
});
