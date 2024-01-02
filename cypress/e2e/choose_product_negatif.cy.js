describe('Choose Product Test - Negative Scenario', () => {
    it('Fails when product is out of stock', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.contains('Out of Stock Product Name').click() // Replace with an out-of-stock product
      cy.get('button[title="Add to Cart"]').should('be.disabled')
  
    })
  })