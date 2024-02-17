import BaseComponent from './base.component.js';

class AccountMenuComponent extends BaseComponent {
  constructor() {
    super('[data-testid="account-menu"]');
  }

  get accountMenuProfileBtn() {
    return this.rootEl.$('[data-testid="account-menu-profile"]');
  }
}

export default AccountMenuComponent;
