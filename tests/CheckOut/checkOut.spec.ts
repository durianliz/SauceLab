import { testFixture as test } from '../../fixture/fixture';
import { expect } from '@playwright/test';
import { checkOutData } from '../../data/checkOutData';


test('check that user can complete the checkout process', async ({application}) => {

    await application.homePage.addItemToCartByName('Sauce Labs Backpack');
    await application.homePage.cart.click();
    await application.shoppingCart.checkoutButton.click();


    await application.checkOutPageYourInformation.firstNameInput.fill(checkOutData.standardData.firstName);
    await application.checkOutPageYourInformation.lastNameInput.fill(checkOutData.standardData.lastName);
    await application.checkOutPageYourInformation.postalCodeInput.fill(checkOutData.standardData.postalCode);
    await application.checkOutPageYourInformation.continueButton.click();

    await expect(application.checkOutPageOverview.paymentInformationLabel, 'Payment information label should be visible').toHaveText('Payment Information:');
    await expect(application.checkOutPageOverview.shippingInformationLabel, 'Shipping information label should be visible').toHaveText('Shipping Information:');
    await expect(application.checkOutPageOverview.priceTotalLabel, 'Price total label should be visible').toHaveText('Price Total');

    await application.checkOutPageOverview.finishButton.click();

    await expect(application.checkOutPageOverview.completeHeader, 'Complete header should be visible').toHaveText('Thank you for your order!');

});


test('check that user can cencel the checkout process', async ({application}) => {

    await application.homePage.addItemToCartByName('Sauce Labs Backpack');
    await application.homePage.cart.click();
    await application.shoppingCart.checkoutButton.click();

    await expect(application.checkOutPageYourInformation.cencelButton, 'Cancel button should be visible').toBeVisible();

    await application.checkOutPageYourInformation.cencelButton.click();
    await expect(application.shoppingCart.pageTitle, 'Shopping Cart Title should be visible').toHaveText('Your Cart');
    await expect(application.shoppingCart.checkoutButton, 'Checkout button should be visible').toBeVisible();

});

