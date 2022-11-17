Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Cypress - Subscribe to newsletter - Valid Email', () => {
  it('loads homepage', () => {
    cy.visit('https://cypress.io');
  });

  it('searches for newsletter textbox', () => {
    cy.get('input[name="email"]').type('mail@mail.com');
  });
  it('click submit button', () => {
	cy.get('.styled__Submit-sc-10l91w3-12').click();
  });
  it('succesful message check', () => {
	cy.contains('Thanks for submitting the form.').should('be.visible');
  });
});

describe('Cypress - Subscribe to newsletter - Invalid Email', () => {
  it('loads homepage', () => {
    cy.visit('https://cypress.io');
  });

  it('searches for newsletter textbox', () => {
    cy.get('input[name="email"]').type('mail12com');
  });
  it('click submit button', () => {
	cy.get('.styled__Submit-sc-10l91w3-12').click();
  });
  it('incorrect email format message check', () => {
	cy.contains('Email must be formatted correctly.').should('be.visible');
  });
});


describe('Cypress - Subscribe to newsletter - No Input', () => {
  it('loads homepage', () => {
    cy.visit('https://cypress.io');
  });
  it('searches for newsletter textbox', () => {
    cy.get('input[name="email"]').click();
  });
  it('click submit button', () => {
	cy.get('.styled__Submit-sc-10l91w3-12').click();
  });
  it('no input error message check', () => {
	cy.contains('Please complete this required field.').should('be.visible');
  });
});



//  it('gets first search result', () => {
//    cy.get('#search a')
//      .invoke('attr', 'href')
//      .then((href) => console.log(href));
//  });