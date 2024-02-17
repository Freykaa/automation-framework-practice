import BaseComponent from '../common/base.component.js';

class BoardComponent extends BaseComponent {
  constructor() {
    super('#chrome-container');
  }

  get addCardBtn() {
    return this.rootEl.$('.js-add-card');
  }
}

export default BoardComponent;
