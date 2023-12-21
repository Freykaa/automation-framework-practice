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

describe ("Sign in", () => {
    it("Sign in using email", async () => {
        const headerProfileIcon = await $('button[data-testid="header-member-menu-button"]');
    
        await login();
        //rewrite expect with expect.url.tohave('home')
        await expect(headerProfileIcon).toBeDisplayed({timeout: 10000});
        });
    });