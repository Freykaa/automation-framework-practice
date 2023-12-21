const login = async () => {
    const loginBtn = await $('//a[@data-testid="login"]')
    const loginUsername = await $('#username');
    const submitBtn = await $('#login-submit');
    const loginPassword = await $('#password');

    await browser.url("https://trello.com/");
    await loginBtn.click();
    await loginUsername.setValue('motay64399@anawalls.com');
    await submitBtn.click();
    await loginPassword.waitForDisplayed({ timeout: 10000 });
    await loginPassword.setValue('&mDXtUkEiiF$97&');
    await submitBtn.click();
    browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: 'Message on failure'
        }
    )};

const openAccountMenu = async () => {
        const headerProfileIcon = await $('button[data-testid="header-member-menu-button"]');
        await headerProfileIcon.waitForDisplayed({ timeout: 10000 });
        await headerProfileIcon.click();
    
        const headerMenuPopover = await $('section[data-testid="header-member-menu-popover"]');
        await headerMenuPopover.waitForDisplayed({ timeout: 10000 });
    };
    
const navigateToAccountMenuProfile = async () => {
        const accountMenuProfile = await $('a[data-testid="account-menu-profile"]');
        await accountMenuProfile.click();
    };
    
const enterAndSaveUsername = async (username) => {
        const usernameField = await $('#username');
        const saveBtn = await $('//button[text()="Save"]');
    
        await usernameField.setValue(username);
        await saveBtn.click();
    };

describe("Edit profile", () => {
    it("Error when changing to exising username", async () => {
        const existingUsername = 'testingtester';

        await login();
        await openAccountMenu();
        await navigateToAccountMenuProfile();
        await enterAndSaveUsername(existingUsername);

        const err = await $('#SaveProfileError_Field_username');
        await expect(err).toBeDisplayed({ timeout: 10000, timeoutMsg: 'Error message not displayed' });
    });
});