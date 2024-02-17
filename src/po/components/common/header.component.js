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

    input(name) {
        const selectors = {
          searchField: 'input[data-test-id="search-dialog-input"]',
        };
    
        return this.rootEl.$(selectors[name]);
    };
}

export default HeaderComponent;