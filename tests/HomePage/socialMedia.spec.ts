
import { testFixture as test } from '../../fixture/fixture';
import { expect } from '@playwright/test';

test('check that X-socialMediaLink is functional', async ({application}) => { 


    const [newPage] = await Promise.all([
        application.page.waitForEvent('popup'),
        await application.homePage.X_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(application.homePage.XURL);
});


test('check that facebook-socialMediaLink is functional', async ({application}) => { 


    const [newPage] = await Promise.all([
        application.page.waitForEvent('popup'),
        await application.homePage.facebook_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(application.homePage.facebookURL);
});


test('check that linkedIn-socialMediaLink is functional', async ({application}) => { 

    const [newPage] = await Promise.all([
        application.page.waitForEvent('popup'),
        await application.homePage.linkedIn_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(application.homePage.linkedInURL);
});
