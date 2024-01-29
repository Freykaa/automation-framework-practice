import BaseComponent from './base.component.js';

class NavigationBarComponent extends BaseComponent {
    constructor() {
        super('[data-testid="bignav"]');
    }

    get loginBtn() {
        return this.rootEl.$('//div/a[contains(@href, "login")]');
    }
}

export { NavigationBarComponent };