import { test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage} from '../../pages/homePage';


const expectedItemsNames = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ];

test('check that expected items visible on home page', async ({page, logIn}) => {

    const homePage = new HomePage(page);
    

    const productsCount = await homePage.itemsNames.count();
    
    for (let i = 0; i < productsCount; i++) {
        await expect(homePage.itemsNames.nth(i)).toHaveText(expectedItemsNames[i]);
    }


});
