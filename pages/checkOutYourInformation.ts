import { Page, Locator } from '@playwright/test';
import { AppComponent } from './appComponent';


export class CheckOutPageYourInformation extends AppComponent {

    page: Page;
    firstNameInput: Locator;
    lastNameInput: Locator;
    postalCodeInput: Locator;
    continueButton: Locator;
    cencelButton: Locator;
    errorMessage: Locator;   
    
    constructor(page: Page) {

        super(page);
        this.page = page;   
        this.firstNameInput = this.page.locator('#first-name');
        this.lastNameInput = this.page.locator('#last-name');
        this.postalCodeInput = this.page.locator('#postal-code');
        this.continueButton = this.page.locator('#continue');
        this.cencelButton = this.page.locator('#cancel');
        this.errorMessage = this.page.locator('.error-message-container');
    }

}
