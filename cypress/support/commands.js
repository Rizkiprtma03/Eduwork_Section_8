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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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
//
Cypress.Commands.add('loginViaAPI', (Authorization) => {
  cy.request('GET', `${Cypress.env('apiUrl')}/basic_auth`, {
    Authorization,
  }).then((response) => {
    expect(response.status).equal(200);
    expect(response.body).contains('Basic Auth');
    expect(response.body).contains('Congratulations! You must have the proper credentials.');
  });
});
//Cypress.Commands.add('loginViaAPI2', (email = Cypress.env('tomsmith'), password = Cypress.env('SuperSecretPassword!')) => {
//  cy.request('POST', `${Cypress.env('apiUrl2')}/login`, {
//    username: email,
//    password: password,
//  }).then(() => {
//    //expect(response.status).equal(200);
//    cy.get('#username').type(Username);
//    cy.get('#password').type(Password);
//    cy.contains('Login').click();
//  });
//});

//cy.request('POST', `${Cypress.env('apiUrl')}/login`, {}).then((response) => {
//  expect(response.status).equal(200);
//  cy.get('#username').type(Username);
//  cy.get('#password').type(Password);
//  cy.contains('Login').click();
//});
//
