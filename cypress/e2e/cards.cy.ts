/// <reference types="cypress" />

const getAllCards = () => cy.get('[data-cy="card"]');
const getCardsNotFound = () => cy.get('[data-cy="cards-not-found"]');
const getSearchInput = () => cy.get('[data-cy="search-input"]');
const getSearchButton = () => cy.get('[data-cy="search-button"]');
const getCardModal = () => cy.get('[data-cy="modal-card"]');
const getCardModalError = () => cy.get('[data-cy="modal-card-error"]');

describe('Cards page', () => {
  beforeEach(() => {
    cy.intercept('GET', '/events?q=*', { fixture: 'cards.json' }).as('getCards');
    cy.intercept('GET', '/events/*', { fixture: 'card.json' }).as('getCard');
    cy.visit('http://localhost:3000/');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should render cards after first visit', () => {
    getAllCards().should('have.length.gt', 0);
  });

  it('Should search working correctly', () => {
    getSearchInput().type('Alice');
    getSearchButton().click();
    cy.wait('@getCards').its('request.url').should('include', '=Alice');
  });

  it('Should show not found if cards does not exist', () => {
    cy.intercept('GET', '/events?q=*', { body: [] }).as('getCards');
    getCardsNotFound().should('not.exist');
    getSearchInput().type('Bla bla bla');
    getSearchButton().click();
    getCardsNotFound().should('exist');
  });

  it('Should open card', () => {
    getCardModal().should('not.exist');
    getAllCards().first().click();
    getCardModal().should('exist');
  });

  it('Should open card with error', () => {
    cy.intercept('GET', '/events/*', { forceNetworkError: true });
    getAllCards().first().click();
    getCardModalError().should('exist');
  });
});
