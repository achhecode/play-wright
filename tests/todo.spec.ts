import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('ArrowUp');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('writing my first to do');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('buy a pen');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByText('writing my first to do').click();
  await expect(page.getByText('writing my first to do')).toBeVisible();
  await page.getByText('buy a pen').click();
  await expect(page.getByText('buy a pen')).toBeVisible();
});