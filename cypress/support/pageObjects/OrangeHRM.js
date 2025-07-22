class OrangeHRM {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }
    
    enterUsername(username) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    }
    
    enterPassword(password) {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    }
    
    submitLogin() {
        cy.get('.oxd-button').click();
    }
    
    verifyLoginSuccess() {
        cy.url().should('include', 'dashboard');
    }
    
    verifyLoginFailure() {
        cy.get('.oxd-alert').should('contain.text', 'Invalid credentials');
    }
    
    verifyLoginFormVisible() {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    navigateToAdmin() {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
    }

    addUser() {
        cy.get('.oxd-select-text').first().click();
        cy.get('.oxd-select-option').should('be.visible');
        cy.get('.oxd-select-option').contains('Admin').click();

        cy.get('.oxd-select-text').last().click();
        cy.get('.oxd-select-option').should('be.visible');
        cy.get('.oxd-select-option').contains('Enabled').click();

        cy.get('.oxd-autocomplete-text-input > input').type('Ranga');
        cy.get('.oxd-autocomplete-dropdown').should('be.visible');
        cy.get('.oxd-autocomplete-dropdown').contains('Ranga').click();
        
        // random number to avoid duplicate usernames
        const randomSuffix = Math.floor(Math.random() * 1000);
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('marcos' + randomSuffix);  
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password123');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password123');
        
        cy.get('.oxd-button--secondary').click();    
    }
}
export default new OrangeHRM();