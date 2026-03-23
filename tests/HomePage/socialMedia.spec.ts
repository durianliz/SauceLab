import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';


//i changed this test using test.describe, but i have this 'referenceError' that i 
//cant solve ::::((((

test.describe('check that social media links are functional', () => {

    let homePage: HomePage;
    
    
    test.beforeEach(async ({page, logIn}) =>  {

    
        homePage = new HomePage(page);
        
    });

    test('check that X-socialMediaLink is functional', async ({page}) => { 



     const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        homePage.X_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(homePage.XURL);
    
});


test('check that facebook-socialMediaLink is functional', async ({page}) => { 

    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        homePage.facebook_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(homePage.facebookURL);
});


test('check that linkedIn-socialMediaLink is functional', async ({page}) => { 

    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        homePage.linkedIn_socialMediaLink.click(),
    ]);

    await expect(newPage).toHaveURL(homePage.linkedInURL);
});

});