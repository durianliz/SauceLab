import { testFixture as test } from '../../fixture/fixture';
import { expect } from '@playwright/test';


test('check that user can add item to cart', async ({ application }) => {

    await application.homePage.addToCartBackpack.click();

    await expect(application.homePage.removeBackpack).toBeVisible();
    await expect(application.shoppingCart.cartBadge).toHaveText('1');

    await application.shoppingCart.cartBadge.click();
    await expect(application.shoppingCart.inventoryItemName).toBeVisible();

})

test('check that user can remove item from cart', async ({ application }) => {

    await application.homePage.addToCartBackpack.click();
    await expect(application.shoppingCart.cartBadge).toHaveText('1');

    await application.homePage.removeBackpack.click();
    await expect(application.shoppingCart.cartBadge).toHaveCount(0);

})