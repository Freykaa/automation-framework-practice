import BaseComponent from "../common/base.component.js";

class WorkspaceNavigationComponent extends BaseComponent {
    constructor() {
        super('[data-testid="workspace-navigation-nav"]');
    };

    get workspaceDetailName() {
        return this.rootEl.$$('[data-testid="workspace-detail-name"]')[1];
    };
};

export { WorkspaceNavigationComponent };