describe('Dummy JSON API', () => {
    beforeEach(() => {
        cy.visit('https://dummyjson.com');
    });

    it('should login successfully', () => {
        cy.login('emilys', 'emilyspass').then((userData) => {
            expect(userData).to.have.property('accessToken');
        });
    });

    it('should fetch current user data', () => {
        cy.currentUser().then((userData) => {
            expect(userData).to.have.property('username', 'emilys');
        });
    });

    it('should refresh tokens successfully', () => {
        cy.refreshTokens().then((tokens) => {
            expect(tokens).to.have.property('accessToken');
            expect(tokens).to.have.property('refreshToken');
        });
    });
});
