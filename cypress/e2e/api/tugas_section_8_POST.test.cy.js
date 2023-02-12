describe('Post User List', () => {
  it('Successfully create new user', () => {
    var user = {
      name: 'Muhamad Rizki Pratama',
      job: 'TE Engineer',
    };
    cy.request('POST', 'https://reqres.in/api/users', user).then((Response) => {
      expect(Response.status).equal(201);
    });
    cy.request('POST', 'https://reqres.in/api/users', { name: 'Muhamad Rizki Pratama', job: 'TE Engineer' }).then((Response) => {
      expect(Response.body).to.have.property('name', 'Muhamad Rizki Pratama');
      expect(Response.body).to.have.property('job', 'TE Engineer');
    });
  });
});
