import BasePage from "./base.page.js";
import { Header } from "../components/index.js";
import { AccountMenu } from "../components/index.js";
import { LeftSidebar } from "../components/index.js";

class BoardsPage extends BasePage {
    constructor() {
        super('https://trello.com/u/motay64399/boards');
        this.header = new Header();
        this.accountMenu = new AccountMenu();
        this.leftSidebar = new LeftSidebar();
    };

    async goToAccountProfile() {
    await this.header.memberMenuBtn.click();
    await this.accountMenu.accountMenuProfileBtn.click();
    };
};

export default BoardsPage;