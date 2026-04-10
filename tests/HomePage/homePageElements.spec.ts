import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginPage } from '../../pages/loginPage';
import { userCredentials } from '../../data/userCredentials';



test('check that home page elements are visible', async ({page}) =>  {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);  

    await loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await expect(homePage.homePageTitle, 'home page title should be visible').toBeVisible();
    await expect(homePage.cart, 'cart should be visible').toBeVisible();
    await expect(homePage.burgerMenu, 'burger menu should be visible').toBeVisible();
    await expect(homePage.productSort, 'product sort should be visible').toBeVisible();
    await expect(homePage.X_socialMediaLink, 'X social media link should be visible').toBeVisible();
    await expect(homePage.facebook_socialMediaLink, 'facebook social media link should be visible').toBeVisible();
    await expect(homePage.linkedIn_socialMediaLink, 'LinkedIn social media link should be visible').toBeVisible();

}
);

