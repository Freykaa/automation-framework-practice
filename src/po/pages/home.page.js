import BasePage from './base.page.js';
import { HeaderComponent } from '../components/common/header.component.js';

class HomePage extends BasePage {
    constructor() {
        super('https://trello.com/');
        this.headerComponent = new HeaderComponent();
    }
}

export default HomePage;