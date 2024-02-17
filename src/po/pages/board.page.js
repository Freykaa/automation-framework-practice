import BasePage from './base.page.js';
import { List, BoardHeader, Filter, WorkspaceNavigation } from '../components/index.js';

class BoardPage extends BasePage {
    constructor() {
        super('https://trello.com/b/SHnJh1SN/testing-environment');
        this.list = new List();
        this.boardHeader = new BoardHeader();
        this.filter = new Filter();
        this.workspaceNavigation = new WorkspaceNavigation();
    };

    async createList(listName) {
       await this.list.addListBtn.click();
       await this.list.input('listName').setValue(listName);
       await this.list.createListBtn.click();
    };

    async createCard(cardName) {
        await this.list.addCardBtn.click();
        await this.list.input('cardName').setValue(cardName);
        await this.list.createCardBtn.click();
    };

    async filterByKeyword(keyword) {
        await this.boardHeader.filterBtn.click();
        await this.filter.input('filterKeywordField').setValue(keyword);
    };

    async getListName() {
        return this.list.listNameText;
    };

    async getCardName() {
        return this.list.cardNameText;
    };

    async getFilterMatches() {
        return this.boardHeader.filterMatchesCounter;
    };
};

export default BoardPage;