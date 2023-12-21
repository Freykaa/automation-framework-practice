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
    const boardTile = $('a.board-tile');
    await boardTile.click();

};

const addCard = async (cardValue) => {
    const addCardBtn = await $('button[data-testid="list-add-card-button"]');
    const addCardTitle = await $('textarea[data-testid="list-card-composer-textarea"]');
    const saveCardBtn = await $('button[data-testid="list-card-composer-add-card-button"]');

    await addCardBtn.waitForDisplayed({timeout: 10000});
    await addCardBtn.click();
    await addCardTitle.waitForDisplayed({timeout: 10000});
    await addCardTitle.setValue(cardValue);
    await saveCardBtn.click();
    await saveCardBtn.click();
};

describe("Add card", () => {
    it("Add default card to the board", async () => {
        const cardName = await $('a[data-testid="card-name"]');
        const cardValue = 'newcard';

        await login();
        await openBoardTab();
        await chooseBoard();
        await addCard(cardValue);
        const getCardName = await cardName.getText();

        await expect(getCardName).toEqual(cardValue);
    })
})

