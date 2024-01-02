describe('Checkout Test', () => {
    it('Successfully proceeds to checkout', () => {
      cy.visit('https://magento.softwaretestingboard.com/checkout/')
  
      cy.get('#billing-firstname').type('FirstName')
  
      cy.get('#place-order-trigger').click()
  
      // Assertion
      cy.get('.checkout-success').should('contain', 'Thank you for your purchase!')
    })
  })