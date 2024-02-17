import BaseComponent from '../common/base.component.js';

class ListComponent extends BaseComponent {
  constructor() {
    super('[data-testid="lists"]');
  }

  get listEditMenuBtn() {
    return this.rootEl.$('button[data-testid="list-edit-menu-button"]');
  }

  get addListBtn() {
    return this.rootEl.$('button[data-testid="list-composer-button"]');
  }

  get createListBtn() {
    return this.rootEl.$('button[data-testid="list-composer-add-list-button"]');
  }

  get getListNameText() {
    return this.rootEl.$('//h2[text()="animal"]');
  }

  get cardNameText() {
    return this.rootEl.$$('[data-testid="card-name"]');
  }

  get createCardBtn() {
    return this.rootEl.$('button[data-testid="list-card-composer-add-card-button"]');
  }

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
}

export default ListComponent;
