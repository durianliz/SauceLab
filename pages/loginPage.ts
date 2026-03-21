import { test, expect, Page, Locator } from '@playwright/test';
import { getLoginData } from '../tests/LogIn/getLogin-Data';

export class LoginPage {

    page: Page;
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    error: Locator;
    
    constructor(page: Page) 
    {
        this.page = page;
        this.emailInput = this.page.locator('#user-name');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.error = this.page.locator('.error-button');
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async performLogin() {
        const { email, password } = getLoginData();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
};

