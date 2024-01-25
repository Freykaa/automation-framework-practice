import BasePage from './base.page.js';
import { LoginForm } from '../components/index.js';

class LoginPage extends BasePage {
    constructor() {
        super('https://id.atlassian.com/login');
        this.loginForm = new LoginForm();
    }
}

export default LoginPage;
