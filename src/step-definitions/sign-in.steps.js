import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is on the Trello promo page$/, async () => {
    await page('promo').open();
});

When(/^user navigates to the login page$/, async () => {
    await page('promo').goToLoginPage();
});

When(/^user signs in with email and password$/, async () => {
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
});

Then(/^user should be redirected to the Trello boards page$/, async () => {
    await expect(browser).toHaveUrl('https://trello.com/u/motay64399/boards');
});
