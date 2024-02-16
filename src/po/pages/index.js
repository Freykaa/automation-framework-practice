import LoginPage from './login.page.js';
import PromoPage from './promo.page.js';
import HomePage from './home.page.js';
import AccountPage from './account.page.js';
import WorkspaceSettings from './workspace_settings.page.js';

/**
 * @param name {'login' | 'promo' | 'home' | 'account' | 'workspaceSettings'}
 * @returns {LoginPage|PromoPage|HomePage|AccountPage|WorkspaceSettings}
 */
function page(name) {
    const items = {
        login: new LoginPage(),
        promo: new PromoPage(),
        home: new HomePage(),
        account: new AccountPage(),
        workspaceSettings: new WorkspaceSettings(),         
    };
    return items[name];
}

export default page;
