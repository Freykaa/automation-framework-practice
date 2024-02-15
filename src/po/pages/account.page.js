import BasePage from "./base.page.js";
import { ProfileTab } from "../components/index.js";

class AccountPage extends BasePage {
    constructor(){
        super('https://trello.com/u/motay64399');
        this.profileTab = new ProfileTab();
    }

    async changeAccountUsername(username) {
        await this.profileTab.input('username').setValue(username);
        await this.profileTab.profileSbmtBtn.click();
    };
};

export default AccountPage;