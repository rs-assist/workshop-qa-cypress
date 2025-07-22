describe('Wikipedia Search Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.wikipedia.org');
  });

  it('should display the search input field', () => {
    cy.get('input[name="search"]').should('be.visible');
  });

  it('should allow searching for a term', () => {
    cy.get('input[name="search"]').type('Cypress (Software){enter}');
    
    cy.origin('https://en.wikipedia.org', () => {
        cy.url().should('include', 'Cypress_(software)');
        cy.get('#firstHeading').should('contain.text', 'Cypress');
    });
  });
});

describe('Wikipedia Responsive Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org');
    });

    it('is responsive on iPhone 6', () => {
        cy.viewport('iphone-6');
        cy.get('input[name="search"]').should('be.visible');
        cy.get('.central-featured').should('have.css', 'flex-direction', 'row');
    });

    it('is responsive on Samsung Galaxy S10', () => {
        cy.viewport('samsung-s10');
        cy.get('input[name="search"]').should('be.visible');
        cy.get('.central-featured').should('have.css', 'flex-direction', 'row');
    });
});