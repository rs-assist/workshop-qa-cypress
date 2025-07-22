describe('API Testing with Cypress', () => {
    it('GET - Fetch Posts', () => {
        cy.request(`${Cypress.config().baseUrl}/posts`)
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body[0]).to.have.property('id');
            });
    });

    it('POST - Create a New Post', () => {
        const newPost = {
            title: 'Cypress Test Post',
            body: 'This is a post created for testing purposes.',
            userId: 1
        };

        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/posts`,
            body: newPost
        }).should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.include(newPost);
        });
    });
});