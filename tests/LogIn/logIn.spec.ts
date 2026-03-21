import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { getLoginData } from './getLogin-Data';
import { LoginPage } from '../../pages/loginPage';


test('Log in with valid userData', async ({ page, logIn }) => {

    await expect(page.locator('.title')).toBeVisible();
});


test('Log in with invalid userData', async ({ page }) => {
    const { invalidEmail, invalidPassword } = getLoginData();

const loginPage = new LoginPage(page)

    await loginPage.navigateToLoginPage();
    
    await loginPage.emailInput.fill(invalidEmail);
    await loginPage.passwordInput.fill(invalidPassword);

    await loginPage.loginButton.click();

    await expect(loginPage.error).toBeVisible();
});
