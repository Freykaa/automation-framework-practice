import BasePage from './base.page.js';
import { Header } from '../components/index.js';

class HomePage extends BasePage {
    constructor() {
        super('https://trello.com/');
        this.header = new Header();
    }
}

export default HomePage;