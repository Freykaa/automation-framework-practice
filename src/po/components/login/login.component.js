import BaseComponent from '../common/base.component.js';

class LoginComponent extends BaseComponent {
  constructor() {
    super('#form-login');
  }

  get loginSubmitBtn() {
    return this.rootEl.$('#login-submit');
  }

  /**
   * @param credentials {'username' | 'password'}
   */
  input(credentials) {
    const selectors = {
      username: '#username',
      password: '#password',
    };

    return this.rootEl.$(selectors[credentials]);
  }
}

export default LoginComponent;
