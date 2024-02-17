import BasePage from "./base.page.js";
import { WorkspaceSettingsHeader } from "../components/index.js";
import { WorkspaceNavigation } from "../components/index.js"; 

class WorkspaceSettings extends BasePage {
    constructor() {
        super('https://trello.com/w/userworkspace67975422/account');
        this.workspaceSettingsHeader = new WorkspaceSettingsHeader();
        this.workspaceNavigation = new WorkspaceNavigation();
    }

    async changeWorkspaceDetails(workspacename) {
        await this.workspaceSettingsHeader.editWorkspaceDetailsIcon.click();
        await this.workspaceSettingsHeader.input('displayedNameField').setValue(workspacename);
        await this.workspaceSettingsHeader.detailsSbmtBtn.click();
    };
}

export default WorkspaceSettings;