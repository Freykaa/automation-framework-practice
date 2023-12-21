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
    const openBoardTile = await $$('a.board-tile');
    await openBoardTile[1].click();

};

const filterCard = async (filterValue) => {
    const filter = await $('button[data-testid="filter-popover-button"]');
    const searchByKeyword = await $('input.nch-textfield__input.lsOhPsHuxEMYEb');

    await filter.click();
    await searchByKeyword.setValue(filterValue);
};

describe("filterCard", () => {
    it("Filter card by keyword", async () => {
        const filterValue = 'newcard';

        await login();
        await openBoardTab();
        await chooseBoard();
        await filterCard(filterValue);

        const numberOfMatches = await $('[data-testid="filter-popover-button-filter-count"] span').getText();
        const matchExist = await numberOfMatches > 0;

        await expect(matchExist).toEqual(true);
    });
});

