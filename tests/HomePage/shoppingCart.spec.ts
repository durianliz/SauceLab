
import { test, expect } from '@playwright/test';
import { Application } from '../../pages';
import { userCredentials } from '../../data/userCredentials';

test('check that user can add item to cart', async ({ page }) => {

    const application = new Application(page);
    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();
    await expect(application.shoppingCart.cartBadge).toHaveText('1');

    await application.shoppingCart.cartBadge.click();
    await expect(page.locator('.inventory_item_name')).toBeVisible();

})

test('check that user can remove item from cart', async ({ page }) => {

    const application = new Application(page);
    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(application.shoppingCart.cartBadge).toHaveText('1');

    await page.locator('#remove-sauce-labs-backpack').click();
    await expect(application.shoppingCart.cartBadge).toHaveCount(0);

})