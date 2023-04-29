/// <reference types="cypress" />

const getCards = () => cy.get('[data-cy="card"]');
const getCategoryInput = () => cy.get('[data-cy="category"]');
const getNameInput = () => cy.get('[data-cy="name"]');
const getDateInput = () => cy.get('[data-cy="date"]');
const getTimeInput = () => cy.get('[data-cy="time"]');
const getAddressInput = () => cy.get('[data-cy="address"]');
const getPhoneInput = () => cy.get('[data-cy="phone"]');
const getPaymentInput = () => cy.get('[data-cy="payment"]');
const getMinimumPriceInput = () => cy.get('[data-cy="minimum-price"]');
const getMaximumPriceInput = () => cy.get('[data-cy="maximum-price"]');
const getPhotoInput = () => cy.get('[data-cy="photo"]');
const getAgreementInput = () => cy.get('[data-cy="agreement"]');
const getCreateButton = () => cy.get('[data-cy="create-button"]');
const getErrorField = () => cy.get('[data-cy="error-field"]');

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should not render any cards after first visit', () => {
    getCards().should('not.exist');
  });

  it('Should show errors if nothing has been inputed', () => {
    getCreateButton().click();
    getErrorField().should('have.length', 11);
    getCards().should('not.exist');
  });

  it('Should create card if correct data has been inputed', () => {
    getCategoryInput().select('Concerts');
    getNameInput().type('Pink');
    getDateInput().type('2024-04-30');
    getTimeInput().type('21:00');
    getAddressInput().type('Main Arena');
    getPhoneInput().type('+456765678');
    getPaymentInput().first().click();
    getMinimumPriceInput().type('10');
    getMaximumPriceInput().type('20');
    getPhotoInput().selectFile('cypress/fixtures/photo.jpg');
    getAgreementInput().click();
    getCreateButton().click();
    getErrorField().should('not.exist');
    getCards().should('exist');
  });
});
