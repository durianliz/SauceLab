import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginPage } from '../../pages/loginPage';
import { userCredentials } from '../../data/userCredentials';



test('check that customer can sort products by price (Lohi)', async ({page}) =>  {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);  


    await loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    const prices = await homePage.getItemsPrices();
    const expectedSortedLohi = prices.map(p => parseFloat(p.replace('$', ''))).sort((a, b) => a - b);

    await homePage.productSort.selectOption('lohi');

    const actualSortedLohi = await homePage.getItemsPrices();

    const actualSortedLohiNumbers = actualSortedLohi.map(p => parseFloat(p.replace('$', '')));

    expect(actualSortedLohiNumbers).toEqual(expectedSortedLohi);

}
);


test('check that customer can sort products by price (Hilo)', async ({page}) =>  {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);  


    await loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    const prices = await homePage.getItemsPrices();
    const expectedSortedHilo = prices.map(p => parseFloat(p.replace('$', ''))).sort((a, b) => b - a);

    await homePage.productSort.selectOption('hilo');

    const actualSortedHilo = await homePage.getItemsPrices();

    const actualSortedHiloNumbers = actualSortedHilo.map(p => parseFloat(p.replace('$', '')));

    expect(actualSortedHiloNumbers).toEqual(expectedSortedHilo);

}
);