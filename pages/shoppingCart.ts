import { test, expect, Page, Locator } from '@playwright/test';

export class ShoppingCartPage {

    page: Page;
    cart: Locator;
    cartBadge: Locator;
    checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cart = this.page.locator('.shopping_cart_link');
        this.checkoutButton = this.page.locator('#checkout');
        this.cartBadge = this.page.locator('.shopping_cart_badge');

}}
