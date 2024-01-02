describe('Edit Address Test - Negative Scenario', () => {
    it('Fails with incomplete address information', () => {

      cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
      cy.get('#street_1').clear() // Clear without adding new address
      cy.get('button[title="Save Address"]').click()
  
      cy.get('.message-error').should('contain', 'This is a required field.')
    })
  })