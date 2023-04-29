/// <reference types="cypress" />
import { cardsInterceptor, cardInterceptor } from '../support/interceptors/cards';

const getCards = () => cy.get('[data-cy="card"]');
const getCardsNotFound = () => cy.get('[data-cy="cards-not-found"]');
const getSearchInput = () => cy.get('[data-cy="search-input"]');
const getSearchButton = () => cy.get('[data-cy="search-button"]');
const getCardModal = () => cy.get('[data-cy="modal-card"]');
const getCardModalError = () => cy.get('[data-cy="modal-card-error"]');

describe('Cards page', () => {
  beforeEach(() => {
    cardsInterceptor({ fixture: 'cards.json' });
    cardInterceptor({ fixture: 'card.json' });
    cy.visit('http://localhost:3000/');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should render cards after first visit', () => {
    getCards().should('have.length.gt', 0);
  });

  it('Should search working correctly', () => {
    getSearchInput().type('Alice');
    getSearchButton().click();
    cy.wait('@getCards').its('request.url').should('include', '=Alice');
  });

  it('Should show not found if cards does not exist', () => {
    cardsInterceptor({ body: [] });
    getCardsNotFound().should('not.exist');
    getSearchInput().type('Bla bla bla');
    getSearchButton().click();
    getCardsNotFound().should('be.visible');
  });

  it('Should show not found if cards does not exist', () => {
    cardsInterceptor({ body: [] });
    getCardsNotFound().should('not.exist');
    getSearchInput().type('Bla bla bla');
    getSearchButton().click();
    getCardsNotFound().should('exist');
  });

  it('Should open card', () => {
    getCardModal().should('not.exist');
    getCards().first().click();
    getCardModal().should('exist');
  });

  it('Should open card with error', () => {
    cardInterceptor({ forceNetworkError: true });
    getCards().first().click();
    getCardModalError().should('exist');
  });
});
