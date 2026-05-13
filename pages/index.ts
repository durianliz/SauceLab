import { Page } from '@playwright/test';

import { AppComponent } from './appComponent';
import { CheckOutPageOverview } from './checkOutOverview';
import { CheckOutPageYourInformation } from './checkOutYourInformation';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { ShoppingCartPage } from './shoppingCart';

export class Application extends AppComponent {

    homePage: HomePage;
    loginPage: LoginPage;
    shoppingCart: ShoppingCartPage;
    checkOutPageYourInformation: CheckOutPageYourInformation;
    checkOutPageOverview: CheckOutPageOverview;

    constructor(page: Page) {
        super(page);

        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.shoppingCart = new ShoppingCartPage(this.page);
        this.checkOutPageYourInformation = new CheckOutPageYourInformation(this.page);
        this.checkOutPageOverview = new CheckOutPageOverview(this.page);
    }
}