import BaseComponent from "./base.component.js";

class HeaderComponent extends BaseComponent {
    constructor() {
        super('[data-testid="authenticated-header"]');
    }

    get memberMenuBtn() {
        return this.rootEl.$('button[data-testid="header-member-menu-button"]');
    }

    get searchIcon() {
        return this.rootEl.$('span.css-1wits42');
    }

    input (searchField) {
        return this.rootEl.$('input[data-test-id="search-dialog-input"]');
    }
}

export { HeaderComponent };