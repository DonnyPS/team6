describe('Edit Account Information Test - Negative Scenario', () => {
    it('Fails with invalid information', () => {
  
      cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
      cy.get('#firstname').clear() // Clear without adding new name
      cy.get('button[title="Save"]').click()
  
      cy.get('.message-error').should('contain', 'This is a required field.')
    })
  })