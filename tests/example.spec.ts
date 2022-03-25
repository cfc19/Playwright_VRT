import { test, expect, Page } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const title = page.locator('#root > div > header > h1');
  await expect(title).toHaveText('Hello this is a test');
  expect(await page.screenshot()).toMatchSnapshot();
});
