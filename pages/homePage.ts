import { Page, Locator } from '@playwright/test';

export class HomePage {

        page: Page;
        homePageURL: string;
        homePageTitle: Locator;

        cart: Locator;
        burgerMenu: Locator;
        productSort: Locator;
        itemsNames: Locator;
        itemsPrice: Locator;
        addToCartButton: Locator;
        X_socialMediaLink: Locator;
        facebook_socialMediaLink: Locator;
        linkedIn_socialMediaLink: Locator;
        XURL: string;
        facebookURL: string;
        linkedInURL: string;    


    constructor(page: Page) {

        this.page = page;
        this.homePageURL = 'https://www.saucedemo.com/inventory.html'
        this.homePageTitle = this.page.getByText('Swag Labs')

        this.cart =this.page.locator('.shopping_cart_link');
        this.burgerMenu = this.page.locator('#react-burger-menu-btn');
        this.productSort = this.page.locator('.product_sort_container');
        this.itemsNames = this.page.locator('.inventory_item_name');
        this.itemsPrice = this.page.locator('.inventory_item_price');
        this.addToCartButton = this.page.locator('btn btn_primary btn_small btn_inventory ');
        this.X_socialMediaLink = this.page.locator('.social_twitter');
        this.facebook_socialMediaLink = this.page.locator('[data-test="social-facebook"]');
        this.linkedIn_socialMediaLink = this.page.locator('[data-test="social-linkedin"]');
        this.XURL = 'https://x.com/saucelabs';
        this.facebookURL = 'https://www.facebook.com/saucelabs';
        this.linkedInURL = 'https://www.linkedin.com/company/sauce-labs/';  

    }

    async getItemsNames() {
        return await this.page.locator('inventory-item-name').allTextContents();
    }

    async getItemsPrices() {
        return await this.page.locator('.inventory_item_price').allTextContents();
    }

    async addItemToCartByName(name: string) {
        const item = this.page.locator('.inventory_item', { hasText: name });
        await item.locator('button', { hasText: /add to cart/i }).click();
    }
}