describe('Wiki 5 tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('Main page elements to be visible', () => {
    cy.get('.central-textlogo .central-textlogo-wrapper').contains('Wikipedia');
    cy.get('[data-jsl10n="portal.slogan"]').contains('The Free Encyclopedia');
    cy.get('#js-link-box-en').should('be.visible')
  });

  it('Wikipedia:Contents page test', () => {
    cy.get('#js-link-box-en').click()
    cy.get('#vector-main-menu-dropdown').click()
    cy.get('#n-contents').click()
    cy.url().should('include', 'Wikipedia:Contents')
    cy.get('[class="firstHeading mw-first-heading"]').contains('Wikipedia:Contents')
    cy.get('[data-mw-thread-id="h-Navigating_Wikipedia\'s_subjects"]').contains('Navigating Wikipedia\'s subjects')
  });

  it('Current events page test', () => {
    cy.get('#js-link-box-en').click()
    cy.get('#vector-main-menu-dropdown').click()
    cy.get('#n-currentevents').click()
    cy.get('[class="mw-body-header vector-page-titlebar"]').contains('Portal:Current events')
    cy.get('#Topics_in_the_news').contains('Topics in the news')
    cy.get('.current-events-calendar a').eq(1).contains('2024')
  })

  it('About wikipedia', () => {
    cy.get('#js-link-box-en').click()
    cy.get('#vector-main-menu-dropdown').click()
    cy.get('#n-aboutsite').click()
    cy.get('[class="firstHeading mw-first-heading"]').contains('Wikipedia:About')
    cy.get('.center').contains('"Imagine a world in which every single person on the planet is given free access to the sum of all human knowledge.')
  })

  it('Contact us', () => {
    cy.get('#js-link-box-en').click()
    cy.get('#vector-main-menu-dropdown').click()
    cy.get('#n-contactpage').click()
    cy.get('[class="firstHeading mw-first-heading"]').contains('Wikipedia:Contact us')
    cy.get('.introto__tabs-main p').then((el) => {
      let contactUsTitles = [
        'Introduction',
        'Readers',
        'Article subjects',
        'Licensing',
        'Donors', '' +
        'Press and partnerships'];
      expect(el.length).to.equal(6);
      for (let i=0; i<el.length; i++) {
        expect(el[i]).to.contain(contactUsTitles[i])
      }
    })
  })
})