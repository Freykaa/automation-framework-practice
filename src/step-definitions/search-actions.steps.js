import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is logged in$/, async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
});

When(/^user searches for a board with keyword "([^"]*)"$/, async (keyword) => {
    await page('home').searchBoard(keyword);
});

Then(/^search results should be clickable$/, async () => {
    const searchResults = await page('home').searchResults();
    await expect(searchResults).toBeClickable();
});
