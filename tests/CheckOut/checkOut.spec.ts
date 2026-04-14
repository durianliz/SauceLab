import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginPage } from '../../pages/loginPage';
import { ShoppingCartPage } from '../../pages/shoppingCart';
import { userCredentials } from '../../data/userCredentials';
import { checkOutData } from '../../data/checkOutData';
import { CheckOutPageYourInformation } from '../../pages/checkOutYourInformation';
import { CheckOutPageOverview } from '../../pages/checkOutOverview';


test('check that user can complete the checkout process', async ({page}) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkOutPageYourInformation = new CheckOutPageYourInformation(page);
    const checkOutPageOverview = new CheckOutPageOverview(page);

    await loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await homePage.addItemToCartByName('Sauce Labs Backpack');
    await homePage.cart.click();
    await shoppingCartPage.checkoutButton.click();


    await checkOutPageYourInformation.firstNameInput.fill(checkOutData.standardData.firstName);
    await checkOutPageYourInformation.lastNameInput.fill(checkOutData.standardData.lastName);
    await checkOutPageYourInformation.postalCodeInput.fill(checkOutData.standardData.postalCode);
    await checkOutPageYourInformation.continueButton.click();

    await expect(checkOutPageOverview.paymentInformationLabel, 'Payment information label should be visible').toHaveText('Payment Information:');
    await expect(checkOutPageOverview.shippingInformationLabel, 'Shipping information label should be visible').toHaveText('Shipping Information:');
    await expect(checkOutPageOverview.priceTotalLabel, 'Price total label should be visible').toHaveText('Price Total');

    await checkOutPageOverview.finishButton.click();

    await expect(page.locator('.complete-header'), 'Complete header should be visible').toHaveText('Thank you for your order!');

});


