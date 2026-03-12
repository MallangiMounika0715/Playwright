import { test, expect } from '@playwright/test';

test('Verify Books link is clickable and navigates correctly', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Books', exact: true }).click();
  const url = page.url();
  expect(url).toContain('books');
});