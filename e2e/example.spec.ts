import { testFixture } from '../fixture/fixture';
import { expect } from '@playwright/test';

testFixture('has title', async ({ application }) => {
  await application.page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(application.page).toHaveTitle(/Playwright/);
});

testFixture('get started link', async ({ application }) => {
  await application.page.goto('https://playwright.dev/');

  // Click the get started link.
  await application.page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(application.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
