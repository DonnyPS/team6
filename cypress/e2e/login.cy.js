describe('Login Test', () => {

  it('Success Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get('#email').type('user@example.com')
    cy.get('#pass').type('Password123')
    cy.get('#send2').click()
  })
})
