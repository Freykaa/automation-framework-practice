import BaseComponent from "../common/base.component.js";

class WorkspaceSettingsHeaderComponent extends BaseComponent {
    constructor() {
        super('.tabbed-pane-header-details')
    }

    get editWorkspaceDetailsIcon() {
        return this.rootEl.$('[data-testid="EditIcon"]');
    }

    get detailsSbmtBtn() {
        return this.rootEl.$('button[type="submit"]');
    }

    input(name) {
        const selectors = {
            displayedNameField: '#displayName'
        };

        return this.rootEl.$(selectors[name]);
    }
}

export default WorkspaceSettingsHeaderComponent;