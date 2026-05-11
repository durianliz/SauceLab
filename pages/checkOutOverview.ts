import { Page, Locator } from '@playwright/test';
import { AppComponent } from './appComponent';

export class CheckOutPageOverview extends AppComponent {

    page: Page;
    paymentInformationLabel: Locator;
    shippingInformationLabel: Locator;
    priceTotalLabel: Locator;
    finishButton: Locator;
    completeHeader: Locator;
    
    constructor(page: Page) {

        super(page);
        this.page = page;   
        this.paymentInformationLabel = this.page.locator('.summary_info_label').nth(0);
        this.shippingInformationLabel = this.page.locator('.summary_info_label').nth(1);
        this.priceTotalLabel = this.page.locator('.summary_info_label').nth(2);
        this.finishButton = this.page.locator('#finish');
        this.completeHeader = this.page.locator('.complete-header');
    }
}