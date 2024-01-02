describe('Shopping Cart Test - Negative Scenario', () => {
    it('Fails to update with invalid quantity', () => {
      cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
      cy.get('.qty').clear().type('invalid') // Entering an invalid quantity
      cy.get('[title="Update"]').click()
  
      cy.get('.message-error').should('contain', 'Please enter a valid quantity for this item.')
    })
  })