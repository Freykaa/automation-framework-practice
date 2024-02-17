import BaseComponent from '../common/base.component.js';

class BoardCreationWindowComponent extends BaseComponent {
  constructor() {
    super('section.rX4pAv5sWHFNjp.js-react-root');
  }

  get createBoardSbmtBtn() {
    return this.rootEl.$('[data-testid="create-board-submit-button"]');
  }

  input(name) {
    const selectors = {
      createBoardTitle: '[data-testid="create-board-title-input"]',
    };

    return this.rootEl.$(selectors[name]);
  }
}

export default BoardCreationWindowComponent;
