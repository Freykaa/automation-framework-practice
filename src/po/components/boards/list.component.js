import BaseComponent from "../common/base.component.js";

class ListComponent extends BaseComponent {
    constructor() {
        super('[data-testid="lists"]');
    };

    get addListBtn() {
        return this.rootEl.$('button[data-testid="list-composer-button"]');
    };

    get createListBtn() {
        return this.rootEl.$('button[data-testid="list-composer-add-list-button"]');
    };

    get listNameText() {
        return this.rootEl.$('[data-testid="list-name"]');
    };

    get cardNameText() {
        return this.rootEl.$$('[data-testid="card-name"]');
    };

    get addCardBtn() {
        return this.rootEl.$('button[data-testid="list-add-card-button"]');
    };

    get createCardBtn() {
        return this.rootEl.$('button[data-testid="list-card-composer-add-card-button"]');
    };

    /**
   * @param name {'listName' | 'cardName' |}
   */
    input(name) {
    const selectors = {
      listName: 'form > textarea',
      cardName: '[data-testid="list-card-composer-textarea"]',
    };

    return this.rootEl.$(selectors[name]);
  }
};

export default ListComponent;
