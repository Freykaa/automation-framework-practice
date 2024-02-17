import BaseComponent from '../common/base.component.js';

class BoardsPageTeamSectionComponent extends BaseComponent {
  constructor() {
    super('.boards-page-team-section');
  }

  get newBoardBtn() {
    return this.rootEl.$('div.board-tile.mod-add');
  }

  get testBoard() {
    return this.rootEl.$('[title="testing environment"]');
  }
}

export default BoardsPageTeamSectionComponent;
