const login = async () => {
    const loginBtn = await $('//a[@data-testid="login"]')
    const loginUsername = await $('#username');
    const submitBtn = await $('#login-submit');
    const loginPassword = await $('#password');

    await browser.url("https://trello.com/");
    await loginBtn.click();
    await loginUsername.setValue('motay64399@anawalls.com');
    await submitBtn.click();
    await loginPassword.waitForDisplayed({ timeout: 3000 });
    await loginPassword.setValue('&mDXtUkEiiF$97&');
    await submitBtn.click();
    browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: 'Message on failure'
        }
)};

const editWorkspaceName = async (newWorkspaceName) => {
    const editIcon = await $('span[data-testid="EditIcon"]');
    const nameInput = await $('input#displayName');
    const saveButton = await $('button=Save');
    const workspaceName = await $('span[data-testid="home-team-tab-name"]');

    await editIcon.click();
    await nameInput.setValue(newWorkspaceName);
    await saveButton.click();
    await workspaceName.waitForDisplayed({timeout: 10000});
};

const openBoardTab = async () => {
    const boardTabBtn = await $('a[data-testid="home-team-boards-tab"]');

    await boardTabBtn.click();
}

describe("Edit workspace", () => {
    it("Edit workspace name", async () => {
        const newWorkspaceName = 'testing space';

        await login();
        await openBoardTab();
        await editWorkspaceName(newWorkspaceName);

        const getHomeWorkspaceName = await $('span[data-testid="home-team-tab-name"]').getText();
        await expect(getHomeWorkspaceName).toEqual(newWorkspaceName);
    });
});