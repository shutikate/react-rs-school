/// <reference types="cypress" />

describe('Just visit e2e test', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });
  it('should visit', () => {
    cy.visit('http://localhost:3000');
  });
});
