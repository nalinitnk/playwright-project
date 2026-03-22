import { test, expect } from '@playwright/test';

test('Amazon Searchbox text', async ({ page }) => {
    // Navigate to the page with the checkbox
    await page.goto('https://www.amazon.com/'); // Replace with your URL

    await page.getByPlaceholder('Search Amazon').fill('laptop');
    //await page.keyboard.press('Enter');

  //  await page.getByTestId('nav-search-submit-button').click();
    await page.locator('#nav-search-submit-button').click();

    await expect(page).toHaveTitle(/laptop/i);
    // Verify the checkbox is checked
});