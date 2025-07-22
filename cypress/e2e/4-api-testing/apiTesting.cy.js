describe('API Testing with Cypress', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    it('GET - Fetch Posts', () => {
        cy.request(`${baseURL}/posts`)
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body[0]).to.have.property('id');
            });
    });
});