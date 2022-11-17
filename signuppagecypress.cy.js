Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
     console.log(makeid(20));
	 

describe('Cypress - Sign Up - Succesful', () => {
  it('loads signup page', () => {
    cy.visit('https://cloud.cypress.io/signup/email');
  });

  it('searches for email textbox and input 10 char random email', () => {
    cy.get('input[type="email"]').type(makeid(10) + '@testmail.com');
  });
  it('searches for password textbox and input 10 char random pass', () => {
    cy.get('input[type="password"]').type(makeid(10));
  });
  it('click submit button', () => {
	cy.get('button[type=submit]').click();
  });
    it('verify account screen', () => {
	cy.contains('We sent an account verification email').should('be.visible');
  });
});

describe('Cypress - Sign Up - Exceeded character limit on Email field', () => {
  it('loads signup page', () => {
    cy.visit('https://cloud.cypress.io/signup/email');
  });

  it('searches for email textbox and input 500 char random email', () => {
    cy.get('input[type="email"]').type(makeid(500) + '@mail.com');
  });
  it('searches for password textbox and input 10 char random pass', () => {
    cy.get('input[type="password"]').type(makeid(10));
  });
  it('click submit button', () => {
	cy.get('button[type=submit]').click();
  });
    it('something went wrong error message', () => {
	cy.contains('Something went wrong').should('be.visible');
  });
});

describe('Cypress - Sign Up - Password easy sequence', () => {
  it('loads signup page', () => {
    cy.visit('https://cloud.cypress.io/signup/email');
  });

  it('searches for email textbox and input 10 char random email', () => {
    cy.get('input[type="email"]').type(makeid(10) + '@mail.com');
  });
  it('searches for password textbox and input common sequence', () => {
    cy.get('input[type="password"]').type('12345678@');
  });
  it('click submit button', () => {
	cy.get('button[type=submit]').click();
  });
    it('something went wrong error message', () => {
	cy.contains('This is similar to a commonly used password').should('be.visible');
  });
    it('loads signup page', () => {
    cy.visit('https://cloud.cypress.io/signup/email');
  });
  it('searches for email textbox and input 10 char random email', () => {
    cy.get('input[type="email"]').type(makeid(10) + '@mail.com');
  });
  it('searches for password textbox and input easy sequence', () => {
    cy.get('input[type="password"]').type('abc123xxx@');
  });
  it('click submit button', () => {
	cy.get('button[type=submit]').click();
  });
    it('something went wrong error message', () => {
	cy.contains('This is similar to a commonly used password').should('be.visible');
  });
});