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
          timeoutMsg: 'failure'
        }
)};

const search = async (searchValue) => {
    const searchIcon = await $('span.css-1wits42');
    const searchField = await $('input[data-test-id="search-dialog-input"]');
    const searchResult = await $('a[data-testid="cross-product-search-result"]');

    await searchIcon.click();
    await searchField.setValue(searchValue);
    await searchResult.waitForDisplayed({timeout: 10000});
    await searchResult.click();
};

describe("Search", () => {
    it("Search for a board by name", async () => {
        const searchValue = 'newboard';
        const boardNameDisplayed = await $('h1[data-testid="board-name-display"]'); 

        await login();
        await search(searchValue);
        await boardNameDisplayed.waitForDisplayed({ timeout: 10000 });

        const nameAfterSearch = await boardNameDisplayed.getText();
        expect(nameAfterSearch).to.equal(searchValue); 
    });
});