import BaseComponent from "../common/base.component.js";

class BoardCreationWindowComponent extends BaseComponent {
    constructor() {
        super('section.rX4pAv5sWHFNjp.js-react-root');
    };

    input(createBoardTitle) {
        return this.rootEl.$('[data-testid="create-board-title-input"]');
    };

    get createBoardSbmtBtn() {
        return this.rootEl.$('[data-testid="create-board-submit-button"]');
    };
}

export { BoardCreationWindowComponent };