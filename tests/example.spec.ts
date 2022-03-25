import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('#root > div > header > h1');
  await expect(title).toHaveText('Test react app');
  expect(await page.screenshot({fullPage: true })).toMatchSnapshot();
  expect(await page.textContent('#root > div > header > h1')).toMatchSnapshot('h1.txt');
});

test('Fill in form and submit',async ({page}) => {
  await page.goto('/');
  await page.fill('[data-test="name-input"]', 'Bob')
  await page.fill('[data-test="age-input"]', '21')
  expect(await page.screenshot({fullPage: true })).toMatchSnapshot();
})
