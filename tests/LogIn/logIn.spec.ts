import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { userCredentials } from '../../data/userCredentials';


test('Log in with valid userData', async ({ page, logIn }) => {

    await expect(page.locator('.title')).toBeVisible();
    await expect(page).toHaveURL(logIn.homePageURL);

});


//so...i made a test but now im not sure if its a good practice to make test like this.
//Cause if potentially one of rotation is failed how do i know which one is failed?
test('Log in with invalid userData', async ({ page }) => {
  
const loginPage = new LoginPage(page)
const invalidData = [userCredentials.lockedOutUser, userCredentials.invalidUser, 
    userCredentials.invalidEmail, userCredentials.invalidPassword];

    for (let data of invalidData) {
        await loginPage.navigateToLoginPage();
        await loginPage.emailInput.fill(data.email);
        await loginPage.passwordInput.fill(data.password);
         await loginPage.loginButton.click();

         await expect(loginPage.error).toBeVisible();
         await expect(page).toHaveURL(loginPage.logInPageURL);
         
    }
});

    
    
   

    
