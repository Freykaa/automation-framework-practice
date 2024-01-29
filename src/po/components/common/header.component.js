import BaseComponent from "./base.component.js";

class HeaderComponent extends BaseComponent {
    constructor() {
        super('[data-testid="authenticated-header"]');
    }

    get memberMenuBtn() {
        return this.rootEl.$('button[data-testid="header-member-menu-button"]');
    }
}

export { HeaderComponent };