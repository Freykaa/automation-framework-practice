import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is logged in and navigates to the test board$/, async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
    await page('home').goToHomeBoardTab();
    await page('home').goToTestBoard();
});

When(/^user creates a new card with name "([^"]*)"$/, async (cardName) => {
    await page('board').createCard(cardName);
});

Then(/^the card with name "([^"]*)" should be displayed on the board$/, async (expectedCardName) => {
    const actualCardName = await page('board').getCardName();
    expect(actualCardName).toEqual(expectedCardName);
});
