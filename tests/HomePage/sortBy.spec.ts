import { expect } from '@playwright/test';
import { userCredentials } from '../../data/userCredentials';
import { testFixture } from '../../fixture/fixture';



testFixture('check that customer can sort products by price (Lohi)', async ({ application }) =>  {


    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);

    const prices = await application.homePage.getItemsPrices();
    const expectedSortedLohi = prices.map(p => parseFloat(p.replace('$', ''))).sort((a, b) => a - b);

    await application.homePage.productSort.selectOption('lohi');

    const actualSortedLohi = await application.homePage.getItemsPrices();

    const actualSortedLohiNumbers = actualSortedLohi.map(p => parseFloat(p.replace('$', '')));

    expect(actualSortedLohiNumbers).toEqual(expectedSortedLohi);

}
);


testFixture('check that customer can sort products by price (Hilo)', async ({ application }) =>  {


    await application.loginPage.performLogin(userCredentials.standardUser.email, userCredentials.standardUser.password);
        
    const prices = await application.homePage.getItemsPrices();
    const expectedSortedHilo = prices.map(p => parseFloat(p.replace('$', ''))).sort((a, b) => b - a);

    await application.homePage.productSort.selectOption('hilo');

    const actualSortedHilo = await application.homePage.getItemsPrices();

    const actualSortedHiloNumbers = actualSortedHilo.map(p => parseFloat(p.replace('$', '')));

    expect(actualSortedHiloNumbers).toEqual(expectedSortedHilo);

}
);