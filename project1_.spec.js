const {test, expect} = require('@playwright/test');

test('My Webpage Test', async ({page}) => {
await page.goto('file:// C:\Users\HP\OneDrive\Desktop\PLAYWRIGHT\tests\project1_.spec.js');
await expect(page.locator('h1')).toHaveText('Welcome to My Web Page');
await page.fill('input[type="text"]', 'usename');
await page.fill('input[type="password"]', 'password');
await page.click('button[type="search"]');
await expect(page.locator('h3')).toHaveText('Visit Google');
    const link=page.locator('a[href="ww.google.com"]');
    await expect(link).toBeVisible();
});