import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/amazonHomePage';

test('Search for a book on Amazon', async ({ page }) => {
    const homePage = new AmazonHomePage(page);

    await homePage.navigate();
    await homePage.searchForItem('Playwright Testing');

    // Wait for URL to contain search term (10s timeout)
   // await expect(page).toHaveURL(/Playwright( |\\+)Testing/, { timeout: 10000 });

    await expect(page).toHaveURL(/Playwright.*Testing/, { timeout: 15000 });

   
});