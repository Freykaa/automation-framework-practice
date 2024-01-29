import BaseComponent from "../common/base.component.js";

class ProfileTabComponent extends BaseComponent {
    constructor() {
        super('[data-testid="profile-tab-container"]');
    }

    get profileSbmtBtn() {
        return this.rootEl.$('button[type="submit"]');
    }

    get saveProfileErrorUsername() {
        return this.rootEl.$('#SaveProfileError_Field_username');
    }

    input(username) {
        return this.rootEl.$('#username');
    }
}

export { ProfileTabComponent };