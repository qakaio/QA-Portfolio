Cypress.Commands.add("form", ()=> {
      // fill-out form

      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
     console.log(makeid(5));

    cy.get('#full_name')
      .type('MOCKDATA TESTING')
    cy.get('#company')
      .type('Testing')
    cy.get('#phone_number')
      .type('2022569878')
    cy.get('#email')
      .type(makeid(6) + "@aharo.com")
    cy.get('#password')
      .type('Abcd1234')

    // click submit
    cy.get(".app-submit-btn-text").click()
 })