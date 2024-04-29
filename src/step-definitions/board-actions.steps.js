import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is logged in$/, async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
});

When(/^user navigates to the home board tab$/, async () => {
    await page('home').goToHomeBoardTab();
});

When(/^user creates a new board with title "([^"]*)"$/, async (boardTitle) => {
    await page('home').createBoard(boardTitle);
});

Then(/^user should be redirected to the created board$/, async () => {
    await expect(browser).toHaveUrlContaining('creation');
});