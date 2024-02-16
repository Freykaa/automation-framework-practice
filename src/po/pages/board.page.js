import BasePage from './base.page.js';
import { List } from '../components/index.js';

class BoardPage extends BasePage {
    constructor() {
        super('https://trello.com/b/SHnJh1SN/testing-environment');
        this.list = new List();
    };

    async createList(listName) {
       await this.list.addListBtn.click();
       await this.list.input('listNameField').setValue(listName);
       await this.list.createListBtn.click();
    };

    async getListName() {
        return await this.list.listNameText;
    }
};

export default BoardPage;