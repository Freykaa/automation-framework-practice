import LoginPage from './login.page.js';
import HomePage from './home.page.js';
import BoardsPage from './boards.page.js';
import AccountPage from './account.page.js';

/**
 * @param name {'login' | 'home' | 'boards' | 'account'}
 * @returns {LoginPage|HomePage|BoardsPage|AccountPage}
 */
function page(name) {
    const items = {
        login: new LoginPage(),
        home: new HomePage(),
        boards: new BoardsPage(),
        account: new AccountPage(),         
    };
    return items[name];
}

export default page;
