import { test } from '@playwright/test';
import { Application } from '../pages/index.ts';
import { userCredentials } from '../data/userCredentials.ts';

export const testFixture = test.extend<{
    application: Application
}>({
application: async ({ page }, use) => {
 const application = new Application(page);
  await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);
    
 await use(application);
}
    });