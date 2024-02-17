import BaseComponent from "./base.component.js";

class SearchResultComponent extends BaseComponent {
    constructor() {
        super('[data-test-id="search-dialog-dialog-wrapper"]');
    }

    get searchResults() {
        return this.rootEl.$('a[data-testid="cross-product-search-result"]');
    }
}

export default SearchResultComponent;