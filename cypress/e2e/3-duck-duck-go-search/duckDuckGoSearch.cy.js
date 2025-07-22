import DuckSearchPage from "../../support/pageObjects/DuckDuckGoSearchPage";

describe('DuckDuckGo Search', () => {
    beforeEach(() => {
        DuckSearchPage.visit();
    });

    it('should search for Cypress', () => {
        DuckSearchPage.typeSearchQuery('Cypress testing');
        DuckSearchPage.submitSearch();
        DuckSearchPage.getResults().should('be.visible');
    });
});