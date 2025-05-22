import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.getByRole('textbox', { name: 'Enter your username here' }).click();
  await page.getByRole('textbox', { name: 'Enter your username here' }).fill('test');
  await page.getByRole('textbox', { name: 'Enter your username here' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter your password here' }).fill('1234');
  await page.getByRole('button', { name: 'Click to login' }).click();
  await page.goto('http://localhost:5173/create');
      await expect(page).toHaveURL('/create');
});