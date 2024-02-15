import LoginPage from './login.page.js';
import HomePage from './home.page.js';
import BoardsPage from './boards.page.js';
import AccountPage from './account.page.js';
import WorkspaceSettings from './workspace_settings.page.js';

/**
 * @param name {'login' | 'home' | 'boards' | 'account' | 'workspaceSettings'}
 * @returns {LoginPage|HomePage|BoardsPage|AccountPage|WorkspaceSettings}
 */
function page(name) {
    const items = {
        login: new LoginPage(),
        home: new HomePage(),
        boards: new BoardsPage(),
        account: new AccountPage(),
        workspaceSettings: new WorkspaceSettings(),         
    };
    return items[name];
}

export default page;
