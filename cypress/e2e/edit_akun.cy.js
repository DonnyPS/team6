describe('Edit Account Information Test', () => {
    it('Successfully edits account information', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
      cy.get('#firstname').clear().type('NewFirstName')
      cy.get('#lastname').clear().type('NewLastName')
      cy.get('button[title="Save"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'You saved the account information.')
    })
  })