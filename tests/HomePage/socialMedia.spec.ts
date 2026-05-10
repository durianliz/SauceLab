import { test, expect } from '@playwright/test';
import { testFixture } from '../../fixture/fixture';
import { userCredentials } from '../../data/userCredentials';

testFixture('check that X-socialMediaLink is functional', async ({ application }) => { 

    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);
    
    const [newPage] = await Promise.all([
        application.page.waitForEvent('popup'),
        await application.homePage.X_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(application.homePage.XURL);
});


testFixture('check that facebook-socialMediaLink is functional', async ({ application }) => { 

    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);    

    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);
    
    const [newPage] = await Promise.all([
        application.page.waitForEvent('popup'),
        await application.homePage.facebook_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(application.homePage.facebookURL);
});


testFixture('check that linkedIn-socialMediaLink is functional', async ({ application }) => { 

    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);            



    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    const [newPage] = await Promise.all([
        application.page.waitForEvent('popup'),
        await application.homePage.linkedIn_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(application.homePage.linkedInURL);
});
