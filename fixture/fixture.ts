import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/loginPage';


type fixture = {
logIn: LoginPage;
}

//i still didnt get how to fix with this fixture:(
export const test = base.extend<fixture>({

    logIn: async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        await loginPage.performLogin();
        
        await use(loginPage);
    }

})

