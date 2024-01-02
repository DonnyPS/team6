describe('Login Test - Negative Scenario', () => {
    it('Fails with incorrect credentials', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
      cy.get('#email').type('wrongemail@example.com')
      cy.get('#pass').type('WrongPassword123')
      cy.get('#send2').click()
  
      cy.get('.message-error').should('contain', 'Invalid login or password.')
    })
  })