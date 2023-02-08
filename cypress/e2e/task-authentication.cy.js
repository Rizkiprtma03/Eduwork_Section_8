describe('Get authentication', () => {
    it('Successfully login by appending username and password in URL', function () {
      cy.loginViaAPI('Basic YWRtaW46YWRtaW4=')
         
    });
  });
  