import { test, expect, Page, Locator } from '@playwright/test';

export class HomePage {

        page: Page;
        cart: Locator;
        burgerMenu: Locator;
        productSort: Locator;
        itemsNames: Locator;
        X_socialMediaLink: Locator;
        facebook_socialMediaLink: Locator
        linkedIn_socialMediaLink: Locator;
        XURL: string;
        facebookURL: string;
        linkedInURL: string;    


    constructor(page: Page) {

        this.page = page;

        this.cart =this.page.locator('.shopping_cart_link');
        this.burgerMenu = this.page.locator('#react-burger-menu-btn');
        this.productSort = this.page.locator('.product_sort_container');
        this.itemsNames = this.page.locator('.inventory_item_name');
        this.X_socialMediaLink = this.page.locator('.social_twitter');
        this.facebook_socialMediaLink = this.page.locator('[data-test="social-facebook"]');
        this.linkedIn_socialMediaLink = this.page.locator('[data-test="social-linkedin"]');
        this.XURL = 'https://x.com/saucelabs';
        this.facebookURL = 'https://www.facebook.com/saucelabs';
        this.linkedInURL = 'https://www.linkedin.com/company/sauce-labs/';  

    }
    
}