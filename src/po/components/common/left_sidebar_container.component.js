import BaseComponent from "./base.component.js";

class LeftSidebarComponent extends BaseComponent {
    constructor() {
        super('.home-left-sidebar-container');
    }

    get homeWorkspaceSettingsBtn() {
        return this.rootEl.$('[data-testid="home-team-settings-tab"]');
    };

    get homeTeamBoardsTab() {
        return this.rootEl.$('[data-testid="home-team-boards-tab"]');
    }
}

export default LeftSidebarComponent;