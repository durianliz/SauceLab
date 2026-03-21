import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { getLoginData } from '../tests/LogIn/getLogin-Data';



type fixture = {
logIn: LoginPage;
}

export const test = base.extend<fixture>({

    logIn: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
         const { email, password } = getLoginData();
                await loginPage.navigateToLoginPage();
                await loginPage.emailInput.fill(email);
                await loginPage.passwordInput.fill(password);
                await loginPage.loginButton.click();
        await use(loginPage);


    }

})

