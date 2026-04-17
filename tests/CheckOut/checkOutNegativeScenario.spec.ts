import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginPage } from '../../pages/loginPage';
import { ShoppingCartPage } from '../../pages/shoppingCart';
import { userCredentials } from '../../data/userCredentials';
import { checkOutData } from '../../data/checkOutData';
import { CheckOutPageYourInformation } from '../../pages/checkOutYourInformation';


const invalidCheckoutData = [
    { ...checkOutData.emptyFirstName, description: 'empty first name', error: 'Error: First Name is required' },
    { ...checkOutData.emptyLastName, description: 'empty last name', error: 'Error: Last Name is required' },
    { ...checkOutData.emptyPostalCode, description: 'empty postal code', error: 'Error: Postal Code is required' },
    { ...checkOutData.emptyData, description: 'all fields empty', error: 'Error: First Name is required' }
];

invalidCheckoutData.forEach(({ firstName, lastName, postalCode, description, error }) => {

test(`check that user cannot continue checkout with ${description}`, async ({page}) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkOutPageYourInformation = new CheckOutPageYourInformation(page);


    await loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await homePage.addItemToCartByName('Sauce Labs Backpack');
    await homePage.cart.click();
    await shoppingCartPage.checkoutButton.click();

    await checkOutPageYourInformation.firstNameInput.fill(firstName);
    await checkOutPageYourInformation.lastNameInput.fill(lastName);
    await checkOutPageYourInformation.postalCodeInput.fill(postalCode);
    await checkOutPageYourInformation.continueButton.click();

        await expect(checkOutPageYourInformation.errorMessage, 'Error message should be visible').toHaveText(error);
}
);
});

test ('check that user cannot checkout with empty cart', async ({page}) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkOutPageYourInformation = new CheckOutPageYourInformation(page);


    await loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await homePage.cart.click();
    await shoppingCartPage.checkoutButton.click();
    await expect(checkOutPageYourInformation.errorMessage, 'Error message should be visible').toHaveText('Error: Your cart is empty');

});
