import BaseComponent from "../common/base.component.js";

class BoardHeaderComponent extends BaseComponent {
    constructor() {
        super('div.board-header');
    };

    get filterBtn() {
        return this.rootEl.$('button[data-testid="filter-popover-button"]');
    };

    get filterMatchesCounter() {
        return this.rootEl.$('[data-testid="filter-popover-button-filter-count"]');
    };
    
};

export default BoardHeaderComponent;