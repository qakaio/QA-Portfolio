Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it.only('verify download file'), () => {
	cy.readFile('cypress.zip')
})

describe('Cypress - Check downloaded file', 
  it('loads homepage', () => {
    cy.visit('https://www.cypress.io/');
  });
    it('click download link', () => {
     cy.get('href[class="Link-sc-5cc5in-0 hOMZYj install-download green underlined"]').click();
  });