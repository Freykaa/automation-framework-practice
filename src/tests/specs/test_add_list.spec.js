/* import chai from 'chai';

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


const chooseBoard = async () => {
    const openBoardTile = await $('//div[@title="filter"]'); //a specific selector 'filter' for the test
    await openBoardTile.click();

};

const addList = async (listValue) => {
    const createListBtn = await $('button[data-testid="list-composer-button"]');
    const listNameArea = await $('form > textarea');
    const addListBtn = await $('button[data-testid="list-composer-add-list-button"]');
    const listName = await $('h2[data-testid="list-name"]')

    await createListBtn.waitForDisplayed({timeout: 10000});
    await createListBtn.click();
    await listNameArea.waitForDisplayed({timeout: 10000});
    await listNameArea.setValue(listValue);
    await addListBtn.click();
    await listName.waitForDisplayed({timeout: 10000});
};

describe("Add list", () => {
    it("Add default list to the board", async () => {
        const listName = await $('h2[data-testid="list-name"]');
        const listValue = 'newlist';

        await login();
        await openBoardTab();
        await chooseBoard();
        await addList(listValue);
        
        const getListName = await listName.getText();
        expect(getListName).to.equal(listValue);
    });
}); */