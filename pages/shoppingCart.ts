import { test, expect, Page, Locator } from '@playwright/test';
import { AppComponent } from './appComponent';

export class ShoppingCartPage extends AppComponent {

    page: Page;
    cart: Locator;
    cartBadge: Locator;
    checkoutButton: Locator;
    pageTitle: Locator;
    inventoryItemName: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.cart = this.page.locator('.shopping_cart_link');
        this.checkoutButton = this.page.locator('#checkout');
        this.cartBadge = this.page.locator('.shopping_cart_badge');
        this.pageTitle = this.page.locator('.title');
        this.inventoryItemName = this.page.locator('.inventory_item_name');

}}
