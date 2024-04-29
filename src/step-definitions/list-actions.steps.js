import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is logged in and navigates to the test board$/, async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
    await page('home').goToHomeBoardTab();
    await page('home').goToTestBoard();
});

When(/^user creates a new list with name "([^"]*)"$/, async (listName) => {
    await page('board').createList(listName);
});

Then(/^the list with name "([^"]*)" should be displayed on the board$/, async (expectedListName) => {
    const actualListName = await page('board').getListName();
    expect(actualListName).toEqual(expectedListName);
});
