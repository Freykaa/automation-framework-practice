import BasePage from "./base.page.js";
import { HeaderComponent } from "../components/common/header.component.js";
import { AccountMenuComponent } from "../components/common/account_menu.component.js";

class BoardsPage extends BasePage {
    constructor() {
        super('https://trello.com/u/motay64399/boards');
        this.header = new HeaderComponent();
        this.accountMenu = new AccountMenuComponent();
    }
}

export default BoardsPage;