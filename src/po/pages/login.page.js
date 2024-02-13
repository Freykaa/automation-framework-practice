import BasePage from './base.page.js';
import { LoginForm } from '../components/index.js';

class LoginPage extends BasePage {
    constructor() {
        super('https://id.atlassian.com/login');
        this.loginForm = new LoginForm();
    }

    async login(username, password) {
        await this.loginForm.loginSubmitBtn.click();
        await this.loginForm.input('username').setValue(username);
        await this.loginForm.loginSubmitBtn.click();
        await this.loginForm.input('password').waitForDisplayed({ timeout: 10000 });
        await this.loginForm.input('password').setValue(password);
        await this.loginForm.loginSubmitBtn.click();
    }

}

export default LoginPage;
