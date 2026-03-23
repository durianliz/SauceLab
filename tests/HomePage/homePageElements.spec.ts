import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';


test('check that home page elements are visible', async ({page, logIn}) =>  {

    const homePage = new HomePage(page);

    await expect(homePage.cart, 'cart is not visible').toBeVisible();
    await expect(homePage.burgerMenu, 'burger menu is not visible').toBeVisible();
    await expect(homePage.productSort, 'product sort is not visible').toBeVisible();
    await expect(homePage.X_socialMediaLink, 'X social media link is not visible').toBeVisible();
    await expect(homePage.facebook_socialMediaLink, 'facebook social media link is not visible').toBeVisible();
    await expect(homePage.linkedIn_socialMediaLink, 'LinkedIn social media link is not visible').toBeVisible();

    // i added these expects but then i thought that maybe they are not necessary
    //cause i think its more convenient to check not just the visibility but to check if
    //the items names and prices are correct for each element, so i will check that in another test 


    // await expect(homePage.itemsNames).toBeVisible();
    // await expect(homePage.itemsPrice).toBeVisible();
    // await expect(homePage.addToCartButton).toBeVisible();
    

}
);
