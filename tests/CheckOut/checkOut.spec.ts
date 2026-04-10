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

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await homePage.cart.click();
    await shoppingCartPage.checkoutButton.click();


    await checkOutPageYourInformation.firstNameInput.fill(checkOutData.standardData.firstName);
    await checkOutPageYourInformation.lastNameInput.fill(checkOutData.standardData.lastName);
    await checkOutPageYourInformation.postalCodeInput.fill(checkOutData.standardData.postalCode);
    await checkOutPageYourInformation.continueButton.click();

    await expect(checkOutPageOverview.paymentInformationLabel, 'Payment information label should be visible').toHaveText('Payment Information:');
    await expect(checkOutPageOverview.shippingInformationLabel, 'Shipping information label should be visible').toHaveText('Shipping Information:');
    await expect(checkOutPageOverview.priceTotalLabel, 'Price total label should be visible').toHaveText('Price Total');

    await page.locator('#finish').click();

    await expect (page.locator('.complete-header'), 'Complete header should be visible').toHaveText('Thank you for your order!');

});


const invalidCheckoutData = [
    { ...checkOutData.emptyFirstName, description: 'empty first name' },
    { ...checkOutData.emptyLastName, description: 'empty last name' },
    { ...checkOutData.emptyPostalCode, description: 'empty postal code' },
    { ...checkOutData.emptyData, description: 'all fields empty' }
];

invalidCheckoutData.forEach(({ firstName, lastName, postalCode, description }) => {

test(`check that user cannot continue checkout with ${description}`, async ({page}) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkOutPageYourInformation = new CheckOutPageYourInformation(page);


    await loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await homePage.cart.click();
    await shoppingCartPage.checkoutButton.click();

    await checkOutPageYourInformation.firstNameInput.fill(firstName);
    await checkOutPageYourInformation.lastNameInput.fill(lastName);
    await checkOutPageYourInformation.postalCodeInput.fill(postalCode);
    await checkOutPageYourInformation.continueButton.click();

        await expect(checkOutPageYourInformation.errorMessage, 'Error message should be visible').toBeVisible();
}
);
});
