import BasePage from "./base.page.js";
import {
  AccountMenu,
  LeftSidebar,
  SearchResult,
  BoardCreationWindow,
  Header,
  BoardsPageTeamSection
} from "../components/index.js";

class HomePage extends BasePage {
  constructor() {
    super("https://trello.com/u/motay64399/boards");
    this.header = new Header();
    this.accountMenu = new AccountMenu();
    this.leftSidebar = new LeftSidebar();
    this.searchResult = new SearchResult();
    this.boardcreationWindow = new BoardCreationWindow();
    this.boardsPageTeamSection = new BoardsPageTeamSection();
  };

  async goToAccountProfile() {
    await this.header.memberMenuBtn.click();
    await this.accountMenu.accountMenuProfileBtn.click();
  };

  async searchBoard(boardName) {
    await this.header.searchIcon.click();
    await this.header.input("searchField").setValue(boardName);
  };

  async searchResults() {
    return await this.searchResult.searchResults;
  };

  async goToHomeBoardTab() {
    await this.leftSidebar.homeTeamBoardsTab.click();
  };

  async goToTestBoard() {
    await this.boardsPageTeamSection.testBoard.click();
  };

  async createBoard(boardTitle) {
    await this.boardsPageTeamSection.newBoardBtn.click();
    await this.boardcreationWindow.input('createBoardTitle').setValue(boardTitle);
    await this.boardcreationWindow.createBoardSbmtBtn.click();
  };
};

export default HomePage;
