import BasePage from './base.page.js';
import { NavigationBar } from '../components/index.js';

class HomePage extends BasePage {
    constructor() {
        super('https://trello.com/');
        this.navigationBar = new NavigationBar();
    }
}

export default HomePage;