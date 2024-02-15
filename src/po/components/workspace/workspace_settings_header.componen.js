import BaseComponent from "../common/base.component.js";

class WorkspaceSettingsHeaderComponent extends BaseComponent {
    constructor() {
        super('.tabbed-pane-header-details')
    }

    get editWorkspaceDetailsIcon() {
        return this.rootEl.$('[data-testid="EditIcon"]');
    }
    
    input (displayNameField) {
        return this.rootEl.$('#displayName');
    }

    get detailsSbmtBtn() {
        return this.rootEl.$('button[type="submit"]');
    }
}

export { WorkspaceSettingsHeaderComponent };