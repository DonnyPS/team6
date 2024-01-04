describe('Edit Address Test', () => {
    it('Successfully edits address', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
  
      cy.get('#street_1').clear().type('123 New Street')
      cy.get('#city').clear().type('New City')
      cy.get('select#region_id option:selected').should('have.value', '62')
      cy.get('#zip').clear().type('98831')
      cy.get('select#country option:selected').should('have.value', 'US')
  
      cy.get('button[title="Save Address"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'You saved the address.')
    })
  })