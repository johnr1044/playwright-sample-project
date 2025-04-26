import { test, expect } from '@playwright/test';

test ('homepage has correct title', async ({page}) => {

    await page.goto('https://advantageonlineshopping.com/#/');

    //confirm page title
    await expect(page).toHaveTitle(" Advantage Shopping");


})
