import { test, expect, Page, Locator } from '@playwright/test';
import { loginData } from '../data/loginData';


export class LoginPage {

    page: Page;
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    error: Locator;
    homePageURL: string;
    logInPageURL: string;
    
    constructor(page: Page) 
    {
        this.page = page;
        this.emailInput = this.page.locator('#user-name');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.error = this.page.locator('.error-button');
        this.homePageURL = 'https://www.saucedemo.com/inventory.html';
        this.logInPageURL = 'https://www.saucedemo.com/';
    }

    async navigateToLoginPage() {
        await this.page.goto(this.logInPageURL);
    }

    async performLogin() {
        await this.page.goto(this.logInPageURL);
        await this.emailInput.fill(loginData.standardUser.email);
        await this.passwordInput.fill(loginData.standardUser.password);
        await this.loginButton.click();
    }


};

