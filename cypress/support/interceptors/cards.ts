/// <reference types="cypress" />

export const cardsInterceptor = (data) => {
  cy.intercept(
    {
      method: 'GET',
      url: '/events?q=*',
    },
    data
  ).as('getCards');
};

export const cardInterceptor = (data) => {
  cy.intercept(
    {
      method: 'GET',
      url: '/events/*',
    },
    data
  ).as('getCard');
};
