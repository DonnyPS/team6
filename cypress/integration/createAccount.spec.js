import 'cypress/support/commands'

describe('Create Account', () => {
  it('Should create an account successfully', () => {
    const email = 'user@example.com'
    const password = 'Password123'
    cy.createAccount(email, password)
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
  })
})
