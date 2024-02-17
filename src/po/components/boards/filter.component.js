import BaseComponent from '../common/base.component.js';

class FilterComponent extends BaseComponent {
  constructor() {
    super('section.rX4pAv5sWHFNjp');
  }

  input(name) {
    const selectors = {
      filterKeywordField: 'input.nch-textfield__input.lsOhPsHuxEMYEb',
    };

    return this.rootEl.$(selectors[name]);
  }
}

export default FilterComponent;
