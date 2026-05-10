import { Page, Locator } from '@playwright/test';
import { AppComponent } from './appComponent';

export class LoginPage extends AppComponent {

    page: Page;
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    error: Locator;
    logInPageURL: string;
    
    constructor(page: Page) 
    {
        super(page);
        this.page = page;
        this.emailInput = this.page.locator('#user-name');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.error = this.page.locator('.error-button');
        this.logInPageURL = '/';
    }

    async navigateToLoginPage() {
        await this.page.goto(this.logInPageURL);
    }

    async performLogin(email: string, password: string) {
        await this.page.goto(this.logInPageURL);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


};