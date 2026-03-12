import { test, expect } from '@playwright/test';

test('Verify Books link is clickable and navigates correctly', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  
  // Click directly on the Books link
  await page.getByRole('link', { name: 'Books', exact: true }).click();
  
  // Verify that the URL contains "books"
  const url = page.url();
  expect(url).toContain('books');
});
