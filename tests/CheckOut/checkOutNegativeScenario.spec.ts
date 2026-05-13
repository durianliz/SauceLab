import { testFixture as test } from '../../fixture/fixture';
import { expect } from '@playwright/test';

import { checkOutData } from '../../data/checkOutData';


const invalidCheckoutData = [
    { ...checkOutData.emptyFirstName, description: 'empty first name', error: 'Error: First Name is required' },
    { ...checkOutData.emptyLastName, description: 'empty last name', error: 'Error: Last Name is required' },
    { ...checkOutData.emptyPostalCode, description: 'empty postal code', error: 'Error: Postal Code is required' },
    { ...checkOutData.emptyData, description: 'all fields empty', error: 'Error: First Name is required' }
];

invalidCheckoutData.forEach(({ firstName, lastName, postalCode, description, error }) => {

test(`check that user cannot continue checkout with ${description}`, async ({application}) => {

    await application.homePage.addItemToCartByName('Sauce Labs Backpack');
    await application.homePage.cart.click();
    await application.shoppingCart.checkoutButton.click();

    await application.checkOutPageYourInformation.firstNameInput.fill(firstName);
    await application.checkOutPageYourInformation.lastNameInput.fill(lastName);
    await application.checkOutPageYourInformation.postalCodeInput.fill(postalCode);
    await application.checkOutPageYourInformation.continueButton.click();

        await expect(application.checkOutPageYourInformation.errorMessage, 'Error message should be visible').toHaveText(error);
}
);
});

test('check that user cannot checkout with empty cart', async ({application}) => {

    await application.homePage.cart.click();
    await application.shoppingCart.checkoutButton.click();
    await expect(application.checkOutPageYourInformation.errorMessage, 'Error message should be visible').toHaveText('Error: Your cart is empty');

});
