describe('Update User', () => {
  it('Successfully update user', () => {
    var user = {
      name: 'Muhamad Rizki Pratama',
      job: 'Security Operations',
    };
    cy.request('PUT', 'https://reqres.in/api/users/2', user).then((Response) => {
      expect(Response.status).equal(200);
      expect(Response.body.name).to.eq(user.name);
    });
  });
});
