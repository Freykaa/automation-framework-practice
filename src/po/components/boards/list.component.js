import BaseComponent from "../common/base.component.js";

class ListComponent extends BaseComponent {
    constructor() {
        super('[data-testid="lists"]');
    };

    get addListBtn() {
        return this.rootEl.$('button[data-testid="list-composer-button"]');
    };

    input(listNameField) {
        return this.rootEl.$('form > textarea');
    };

    get createListBtn() {
        return this.rootEl.$('button[data-testid="list-composer-add-list-button"]');
    };

    get listNameText() {
        return this.rootEl.$('[data-testid="list-header"] [data-testid="list-name"]');
    };

};

export { ListComponent };
