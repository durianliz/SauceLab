import { Page } from '@playwright/test';

export class AppComponent {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}