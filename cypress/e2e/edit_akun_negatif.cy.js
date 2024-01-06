describe('Edit Account Information Test - Negative Scenario', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/')
    cy.login_simple('99emailakun@gmail.com', '123Dummy')
    cy.visit('/customer/account/edit/')
  })

  it('Fails with invalid information', () => {
    cy.get('#firstname').clear() // Clear without adding new name
    cy.get('button[title="Save"]').click()

    cy.get('#firstname-error').should('contain', 'This is a required field.')
  })
})