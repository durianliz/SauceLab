import test from '@playwright/test';
import { Application } from '../pages/index';

export const testFixture = test.extend<{
    application: Application
}>({
application: async ({ page }, use) => {
 const application = new Application(page);
 await use(application);
}
    
});