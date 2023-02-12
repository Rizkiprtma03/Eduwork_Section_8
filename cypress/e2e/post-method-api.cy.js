describe('Post Users', () => {
    it('Add a new user', () => {
        var user = {
            name: 'Fathur Rohim',
            job: 'Test Engineer',
        };
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201);
        });

        cy.request('GET', 'https:reqres.in/api/users').then((response) => {
            cy.log(response.body);
            // cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
            // expect(response.status).equal(201)
            console.log(response);
            const response_view = response.body;
            cy.log(response_view);
            cy.task('log', response_view);
            // cy.server({
            //   onResponse(response) {
            //     // Log every response
            //     console.log("response", response);
            //   }
            // });
        });
    });
});