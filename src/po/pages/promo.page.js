import BasePage from './base.page.js';
import { NavigationBar } from '../components/index.js';

class PromoPage extends BasePage {
  constructor() {
    super('https://trello.com/');
    this.navigationBar = new NavigationBar();
  }

  async goToLoginPage() {
    await this.navigationBar.loginBtn.click();
  }
}

export default PromoPage;
