import BasePage from './base.page.js';
import { List, BoardHeader, Filter } from '../components/index.js';

class BoardPage extends BasePage {
    constructor() {
        super('https://trello.com/b/SHnJh1SN/testing-environment');
        this.list = new List();
        this.boardHeader = new BoardHeader();
        this.filter = new Filter();
    };

    async createList(listName) {
       await this.list.addListBtn.click();
       await this.list.input('listNameField').setValue(listName);
       await this.list.createListBtn.click();
    };

    async createCard(cardName) {
        await this.list.addCardBtn.click();
        await this.list.input('cardNameField').setValue(cardName);
        await this.list.createCardBtn.click();
    };

    async filterByKeyword(keyword) {
        await this.boardHeader.filterBtn.click();
        await this.filter.input('keywordField').setValue(keyword);
    };

    async getListName() {
        return await this.list.listNameText;
    };

    async getCardName() {
        return await this.list.cardNameText;
    };

    async getFilterMatches() {
        return await this.boardHeader.filterMatchesCounter;
    };
};

export default BoardPage;