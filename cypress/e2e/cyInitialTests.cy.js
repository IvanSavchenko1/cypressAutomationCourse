describe('Wiki tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('Initial test', () => {
    cy.get('#js-link-box-en').click();
    cy.get('#Welcome_to_Wikipedia').contains('Welcome to');
    cy.get('#Welcome_to_Wikipedia a').contains('Wikipedia');
    // same assertion with chained search
    cy.get('#Welcome_to_Wikipedia').find('a').contains('Wikipedia');
    cy.get('#pt-createaccount-2').contains('Create account');
    cy.get('#pt-login-2').contains('Log in');
    cy.get('#vector-user-links-dropdown').should('be.visible');
  });

  it('Second test', () => {
    cy.get('#js-link-box-en').click();
    cy.go('back');
    cy.go('forward');
    cy.get('.extiw').eq(4).click();
    cy.origin('https://commons.wikimedia.org/', () => {
      cy.get('.mainpage-actions li').eq(0).as("Images")
      expect("Images").to.contain('Images')
      cy.go('back');
    })
  });

  it('Input and search test', () => {
    cy.get('#js-link-box-en').click();
    cy.get('.cdx-text-input__input').type("Cypress software")
    cy.contains("button", "Search").click()
    cy.get('.mw-search-result-heading').then((el) => {
      expect(el.eq(0)).to.contain('Cypress')
      expect(el.length).to.equal(20)
      })
  })
})