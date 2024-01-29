import BasePage from "./base.page.js";
import { ProfileTab } from "../components/index.js";

class AccountPage extends BasePage {
    constructor(){
        super('https://trello.com/u/motay64399');
        this.profileTab = new ProfileTab();
    }
}

export default AccountPage;