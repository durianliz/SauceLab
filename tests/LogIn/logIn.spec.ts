import { test, expect } from '@playwright/test';
import { userCredentials } from '../../data/userCredentials';
import { testFixture } from '../../fixture/fixture';


testFixture('Log in with valid userData', async ({ application }) => {  

    await application.loginPage.navigateToLoginPage();
    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await expect(application.page.locator('.title')).toBeVisible();
    await expect(application.page).toHaveURL(application.homePage.homePageURL);

});



const invalidData = [{ ...userCredentials.lockedOutUser, type: 'locked out user' }, { ...userCredentials.invalidUser, type: 'invalid user' },
{ ...userCredentials.invalidEmail, type: 'invalid email' }, { ...userCredentials.invalidPassword, type: 'invalid password' }];

invalidData.forEach((data) => {
    testFixture(`Log in with invalid ${data.type}`, async ({ application }) => {

        await application.loginPage.navigateToLoginPage();
        await application.loginPage.emailInput.fill(data.email);
        await application.loginPage.passwordInput.fill(data.password);
        await application.loginPage.loginButton.click();

        await expect(application.loginPage.error, `Expected error message for ${data.type}`).toBeVisible();
        await expect(application.page, `Expected URL for ${data.type}`).toHaveURL(application.loginPage.logInPageURL);


    });
})