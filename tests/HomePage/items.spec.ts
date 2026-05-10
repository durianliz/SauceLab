import { expect } from '@playwright/test';
import { testFixture } from '../../fixture/fixture';
import { userCredentials } from '../../data/userCredentials';


const expectedItemsNames = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ];

testFixture('check that expected items visible on home page', async ({ application }) => {

    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    const productsCount = await application.homePage.itemsNames.count();
    
    for (let i = 0; i < productsCount; i++) {
        await expect(application.homePage.itemsNames.nth(i)).toHaveText(expectedItemsNames[i]);
    }


});
