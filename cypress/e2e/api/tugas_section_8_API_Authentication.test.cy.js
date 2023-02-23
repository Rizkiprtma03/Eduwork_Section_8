describe('Get authentication', () => {
  it('successfully logs in via GUI', () => {
    cy.intercept('GET', `${Cypress.env('apiUrl')}/basic_auth`);
    cy.loginViaAPI('Basic YWRtaW46YWRtaW4=');
    //cy.wait('@getBasic_auth');
    //cy.contains('h2', 'Basic Auth').should();
    //cy.get('p').contains('include.text', 'Congratulations! You must have the proper credentials.');
  });
});
