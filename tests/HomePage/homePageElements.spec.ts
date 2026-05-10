import { expect } from '@playwright/test';
import { userCredentials } from '../../data/userCredentials';
import { testFixture } from '../../fixture/fixture';



    

testFixture('check that home page elements are visible', async ({ application }) =>  {

   

    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await expect(application.homePage.homePageTitle, 'home page title should be visible').toBeVisible();
    await expect(application.homePage.cart, 'cart should be visible').toBeVisible();
    await expect(application.homePage.burgerMenu, 'burger menu should be visible').toBeVisible();
    await expect(application.homePage.productSort, 'product sort should be visible').toBeVisible();
    await expect(application.homePage.X_socialMediaLink, 'X social media link should be visible').toBeVisible();
    await expect(application.homePage.facebook_socialMediaLink, 'facebook social media link should be visible').toBeVisible();
    await expect(application.homePage.linkedIn_socialMediaLink, 'LinkedIn social media link should be visible').toBeVisible();

}
);

