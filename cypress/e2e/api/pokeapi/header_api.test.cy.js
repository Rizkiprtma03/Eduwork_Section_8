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
});
