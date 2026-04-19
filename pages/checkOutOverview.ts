import { Page, Locator } from '@playwright/test';

export class CheckOutPageOverview {

    page: Page;
    paymentInformationLabel: Locator;
    shippingInformationLabel: Locator;
    priceTotalLabel: Locator;
    finishButton: Locator;
    
    constructor(page: Page) {

        this.page = page;   
        this.paymentInformationLabel = this.page.locator('.summary_info_label').nth(0);
        this.shippingInformationLabel = this.page.locator('.summary_info_label').nth(1);
        this.priceTotalLabel = this.page.locator('.summary_info_label').nth(2);
        this.finishButton = this.page.locator('#finish');
    }
}