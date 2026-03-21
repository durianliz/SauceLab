import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';
import { ShoppingCartPage } from '../../pages/shoppingCart';

test('check that user can add item to cart', async ({ page, logIn }) => {

    const homePage = new HomePage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();
    await expect(shoppingCartPage.cartBadge).toHaveText('1');

    await shoppingCartPage.cartBadge.click();
    await expect(page.locator('.inventory_item_name')).toBeVisible();

})

test('check that user can remove item from cart', async ({ page, logIn }) => {

    const homePage = new HomePage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(shoppingCartPage.cartBadge).toHaveText('1');

    await page.locator('#remove-sauce-labs-backpack').click();
    await expect(shoppingCartPage.cartBadge).toHaveCount(0);

})