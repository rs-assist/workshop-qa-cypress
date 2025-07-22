// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => { 
    return cy.request({
        method: 'POST',
        url: 'https://dummyjson.com/auth/login',
        headers: { 'Content-Type': 'application/json' },
        body: {
            username: username,
            password: password,
            expiresInMins: 30,
        }
    }).then((response) => {
        Cypress.env('accessToken', response.body.accessToken);
        Cypress.env('refreshToken', response.body.refreshToken);
        
        return response.body;
    });
})

Cypress.Commands.add('currentUser', () => {
    return cy.request({
        method: 'GET',
        url: 'https://dummyjson.com/auth/me',
        headers: {  
            Authorization: `Bearer ${Cypress.env('accessToken')}`
        }
    }).then((response) => {
        return response.body;
    });
    
})

Cypress.Commands.add('refreshTokens', () => {
    return cy.request({
        method: 'POST',
        url: 'https://dummyjson.com/auth/refresh',
        headers: { 'Content-Type': 'application/json' },
        body: {
            refreshToken: Cypress.env('refreshToken'),
            expiresInMins: 30,
        }
    }).then((response) => {
        Cypress.env('accessToken', response.body.accessToken);
        Cypress.env('refreshToken', response.body.refreshToken);
        
        return response.body;
    });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })