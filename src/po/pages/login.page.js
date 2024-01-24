import BasePage from './base.page.js';
import { LoginComponent } from '../components/login/login.component.js';

class LoginPage extends BasePage {
    constructor() {
        super('https://id.atlassian.com/login');
        this.loginComponent = new LoginComponent();
    }
}

export default LoginPage;
