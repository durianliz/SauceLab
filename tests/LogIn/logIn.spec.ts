import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';
import { userCredentials } from '../../data/userCredentials';


test('Log in with valid userData', async ({ page, logIn }) => {

    const homePage = new HomePage(page);

    await expect(page.locator('.title')).toBeVisible();
    await expect(page).toHaveURL(homePage.homePageURL);

});



test('Log in with invalid userData', async ({ page }) => {
  
const loginPage = new LoginPage(page)
const invalidData = [{...userCredentials.lockedOutUser, type: 'locked out user'}, {...userCredentials.invalidUser, type: 'invalid user'}, 
    {...userCredentials.invalidEmail, type: 'invalid email'}, {...userCredentials.invalidPassword, type: 'invalid password'}];

    for (let data of invalidData) {
        await loginPage.navigateToLoginPage();
        await loginPage.emailInput.fill(data.email);
        await loginPage.passwordInput.fill(data.password);
         await loginPage.loginButton.click();

         await expect(loginPage.error, `Expected error message for ${data.type}`).toBeVisible();
         await expect(page, `Expected URL for ${data.type}`).toHaveURL(loginPage.logInPageURL);
         
    }
});

    
    
   

    
