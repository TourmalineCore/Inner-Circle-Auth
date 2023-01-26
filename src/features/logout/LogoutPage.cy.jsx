import { MemoryRouter } from 'react-router-dom';

import LogoutPage from './LogoutPage';

describe('Logout page tests', () => {
  it('should successfully render', () => {
    cy.intercept('/auth', {
      statusCode: 200,
    });
    cy.mount(
      <MemoryRouter>
        <LogoutPage />
      </MemoryRouter>,
    );
    expect(true).equal(true);
  });
});
