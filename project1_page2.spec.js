const { test, expect} = require('@playwright/test');

test('prime',async({page}) => {
  await page.goto('https://www.amazon.in/amazonprime');
  page.waitForLoadState('domcontentloaded');
  const image=page.locator('img[alt="Prime logo"]');
  expect(page.getByRole('heading',{name: 'Welcome to Prime'})).toContainText('Welcome to Prime');
});

test('fresh cart',async ({page}) => {
  await page.goto('https://wwww.amazon.in/fmc/storefront?almBrandUd=ctnow');
  page.waitForLoadState('domcontentloaded');
  await page.locator('text="Add to Cart"').first().click();
});

test('search', async({page}) =>{
  await page.goto('https://www.amazon.in/');
  await page.locator('input[name="field-keywords"]').fill('iphone15');
  await page.locator('input[type="submit"]').click();
});