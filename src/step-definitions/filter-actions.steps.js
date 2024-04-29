import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is logged in and navigates to the test board$/, async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
    await page('home').goToHomeBoardTab();
    await page('home').goToTestBoard();
});

When(/^user filters the board by keyword "([^"]*)"$/, async (keyword) => {
    await page('board').filterByKeyword(keyword);
});

Then(/^filtered matches should be displayed on the board$/, async () => {
    await expect(page('board').getFilterMatches()).toBeDisplayed();
});
