describe('Shopping Cart Test', () => {
    it('Successfully views and updates the shopping cart', () => {
      cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
      // Example: Update quantity
      cy.get('.qty').clear().type('2')
      cy.get('[title="Update"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'shopping cart has been updated.')
    })
  })