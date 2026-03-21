import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';

test('check that X-socialMediaLink is functional', async ({page, logIn}) => { 

    const homePage = new HomePage(page);

    
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await homePage.X_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(homePage.XURL);
});


test('check that facebook-socialMediaLink is functional', async ({page, logIn}) => { 

    const homePage = new HomePage(page);

    
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await homePage.facebook_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(homePage.facebookURL);
});


test('check that linkedIn-socialMediaLink is functional', async ({page, logIn}) => { 

    const homePage = new HomePage(page);

    
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await homePage.linkedIn_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(homePage.linkedInURL);
});
