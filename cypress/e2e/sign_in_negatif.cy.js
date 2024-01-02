describe('Sign In Test - Negative Scenario', () => {
    it('Fails with already used email', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('#firstname').type('firstName')
      cy.get('#lastname').type('lastName')
      cy.get('#email_address').type('user@example.com') // Assuming this email is already in use
      cy.get('#password').type('Password123')
      cy.get('#password-confirmation').type('Password123')
      cy.get('button[title="Create an Account"]').click()
  
      cy.get('.message-error').should('contain', 'There is already an account with this email address.')
    })
  })