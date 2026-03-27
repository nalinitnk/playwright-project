

import { test, expect } from '@playwright/test';

test('checkbox should be checked', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');

  // Locate checkbox (example: "Home")
  const checkbox = page.getByText('Home');

  // Click checkbox
  await checkbox.click();

  // Assertion (verify it's checked)
  const checkedBox = page.locator('.rct-icon-check');
  await expect(checkedBox).toBeVisible();

});