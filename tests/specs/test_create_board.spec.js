import chai from 'chai';

const { expect } = chai;

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

const openBoardTab = async () => {
    const boardTabBtn = await $('a[data-testid="home-team-boards-tab"]');
    const boardSection = await $('ul.boards-page-board-section-list');
    await boardTabBtn.click();
    await boardSection.waitForDisplayed({timeout: 10000});
};

const createNewBoard = async (newBoardName) => {
    const createBoard = await $('div.board-tile.mod-add');
    const titleBoard = await $('input[data-testid="create-board-title-input"]');
    const createBoardBtn = await $('button[data-testid="create-board-submit-button"]');
    const boardNameDisplayed = await $('h1[data-testid="board-name-display"]');

    await createBoard.click();
    await titleBoard.waitForDisplayed({ timeout: 10000 });
    await titleBoard.setValue(newBoardName);
    await createBoardBtn.waitForEnabled({ timeout: 10000 });
    await createBoardBtn.click();
    await boardNameDisplayed.waitForExist({ timeout: 10000 });
};

describe("Create a board", () => {
    it("Create a default board", async () => {
        const boardNameDisplayed = await $('h1[data-testid="board-name-display"]');
        const newBoardName = 'newboard';
        
        await login();
        await createNewBoard(newBoardName);
        const nameAfterCreation = await boardNameDisplayed.getText();
        expect(nameAfterCreation).to.equal(newBoardName);
    })
})