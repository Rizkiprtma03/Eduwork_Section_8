describe('Validate Header', () => {
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokeapi');
        cy.get('@pokeapi').its('headers').its('content-type').should('include', 'application/json; charset=utf-8');
    });
    it('Successfully validate body', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto?page=2&per_pages=1&delay=3',
        }).as('users');
        cy.get('@users').its('status').should('eq', 200);
        cy.get('@users').then((response) => {
            cy.log(response.body);
            cy.log(JSON.stringify(response.body));
            expect(response.body).property('name', 'ditto');
            expect(response.body).property('abilities');
        });
    });
    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto'), cy.get('@ditto').its('status').should('eq', 200);
    });
    it('Successfully validate status code with params', () => {
        cy.request({
            methode: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto?page=2&per_pages=1&delay=3',
        }).as('users');
        cy.get('@users').its('status').should('equal', 200);
        cy.get('@users').then((response) => {
            cy.log(JSON.stringify(response));
        });
    });
    it('Successfully validate content', () => {
        cy
            .request({
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
            })
            .as('bulbasaur'),
            cy.get('@bulbasaur').its('body').should('include', { name: 'bulbasaur' });
    });
    it('Successfully validate content body', () => {
        var pokemon = {
            name: 'limber',
        };
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto?page=2&per_pages=1&delay=3', pokemon).as('limber'),
            cy.get('@limber').then((response) => {
                expect(response.body.name).to.eq('ditto');
            });
    });
    it('Successfully validate negative response', () => {
        cy.request({
            methode: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork');
        cy.get('@eduwork').its('status').should('equal', 404);
    });
});