describe('Choose Product Test', () => {
    it('Successfully selects a product', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.contains('Example Product Name').click() // Replace with actual product name
      cy.get('button[title="Add to Cart"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'added to your shopping cart.')
    })
  })