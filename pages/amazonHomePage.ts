import { Page, Locator } from '@playwright/test';

export class AmazonHomePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
    }

    async navigate() {
        await this.page.goto('https://www.amazon.com/');
    }

   async searchForItem(item: string) {
    await this.searchBox.fill(item);
    await this.searchButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.searchButton.click();
}
}