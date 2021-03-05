describe('Test', () => {
  it('Should show homepage', () => {
    cy.mswRestIntercept(
      'GET',
      'http://localhost:3000/users/*',
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ status: 'OK', overriden: true })
        );
      }
    ).as('GetCall');

    cy.mswGraphqlIntercept('mutation', 'UpdateCurrentUser', (req, res, ctx) => {
      return res(
        ctx.data({
          user: {
            id: 'mocked',
            firstName: 'mock_firstname',
            lastName: 'mock_lastname',
          },
        })
      );
    }).as('GraphqlMutation');

    cy.mswGraphqlIntercept('query', 'CurrentUser').as('GraphqlQuery');

    cy.visit('');

    cy.mswWait('@GetCall');
    cy.mswWait('@GraphqlMutation');
    cy.mswWait('@GraphqlQuery');

    cy.get('[data-testid="app-container"]').should('exist');
  });
});
