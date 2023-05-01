/// <reference types="cypress" />
const getNotFoundPage = () => cy.get('[data-cy="not-found-page"]');

describe('Not-found page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/not-existing-page');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should render about us page after first visit', () => {
    getNotFoundPage().should('exist');
  });
});
