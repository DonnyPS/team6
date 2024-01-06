describe('Edit Address Test - Negative Scenario', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/')
    cy.login_simple('99emailakun@gmail.com', '123Dummy')
    cy.visit('/customer/address/edit/')
  })

  it('Fails with incomplete address information', () => {
    cy.get('#telephone').clear() // Clear without adding new address
    cy.get('button[title="Save Address"]').click()

    cy.get('#telephone-error').should('be.visible')
  })
})