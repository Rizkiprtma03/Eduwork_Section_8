describe('Delete User', () => {
  it('Successfully deleted user', () => {
    cy.request('DELETE', 'https:reqres.in/api/users/2').then((Response) => {
      expect(Response.status).equal(204);
    });
  });
});
