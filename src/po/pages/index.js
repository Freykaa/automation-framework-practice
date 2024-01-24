import LoginPage from './login.page.js';
import HomePage from './home.page.js';
import BoardsPage from './boards.page.js';
/**
 * @param name {'login' | 'home' | 'boards'}
 * @returns {LoginPage|HomePage|BoardsPage}
 */
function page(name) {
    const items = {
        login: new LoginPage(),
        home: new HomePage(),
        boards: new BoardsPage,         
    };
    return items[name];
}

export {
    LoginPage,
    HomePage,
    BoardsPage,
    page,
};
