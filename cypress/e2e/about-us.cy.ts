/// <reference types="cypress" />
const getAboutUsPage = () => cy.get('[data-cy="about-us-page"]');

describe('About-us page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about-us');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should render about us page after first visit', () => {
    getAboutUsPage().should('exist');
  });
});
