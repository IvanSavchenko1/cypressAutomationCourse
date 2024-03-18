describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.wikipedia.org//');
    cy.get('#js-link-box-en').click();

    cy.get('#Welcome_to_Wikipedia').contains('Welcome to');
    cy.get('#Welcome_to_Wikipedia a').contains('Wikipedia');
    // same assertion with chained search
    cy.get('#Welcome_to_Wikipedia').find('a').contains('Wikipedia');
    cy.get('#pt-createaccount-2').contains('Create account');
    cy.get('#pt-login-2').contains('Log in');
    cy.get('#vector-user-links-dropdown').should('be.visible');
  })
})