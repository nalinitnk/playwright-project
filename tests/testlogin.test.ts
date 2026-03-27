import { test, expect } from '@playwright/test';

test('Checkbox test', async ({ page }) => {
    // Navigate to the page with the checkbox
    await page.goto(https://demoqa.com/checkbox'); // Replace with your URL

    // Check the checkbox
    const checkboxSelector = 'input[type="checkbox"]'; // Replace with the actual selector
    await page.check(checkboxSelector);

    // Verify the checkbox is checked
    await expect(page.locator(checkboxSelector)).toBeChecked();

    // Uncheck the checkbox
    await page.uncheck(checkboxSelector);

    // Verify the checkbox is unchecked
    await expect(page.locator(checkboxSelector)).not.toBeChecked();
});