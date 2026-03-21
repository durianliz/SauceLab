import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';


test('check that home page element - cart - is visible', async ({page, logIn}) => { 

    const homePage = new HomePage(page);

    await expect(homePage.cart).toBeVisible();

});

test('check that home page element - burger menu - is visible', async ({page, logIn}) => { 

    const homePage = new HomePage(page);

    await expect(homePage.burgerMenu).toBeVisible();

});


test('check that home page element - product sort - is visible', async ({page}) => { 

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.performLogin();

    await expect(homePage.productSort).toBeVisible();

});

