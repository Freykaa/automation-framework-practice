import { Given, When, Then } from '@wdio/cucumber-framework';
import page from '../po/pages/index.js';

Given(/^user is logged in$/, async () => {
    await page('promo').open();
    await page('promo').goToLoginPage();
    await page('login').login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);
});

When(/^user navigates to the workspace settings$/, async () => {
    await page('home').leftSidebar.homeWorkspaceSettingsBtn.click();
});

When(/^user changes the workspace name to "([^"]*)"$/, async (newWorkspaceName) => {
    await page('workspaceSettings').changeWorkspaceDetails(newWorkspaceName);
});

Then(/^the workspace name should be updated to "([^"]*)"$/, async (expectedWorkspaceName) => {
    const actualWorkspaceName = await page('workspaceSettings').workspaceNavigation.workspaceDetailName.getText();
    expect(actualWorkspaceName).toEqual(expectedWorkspaceName);
});
