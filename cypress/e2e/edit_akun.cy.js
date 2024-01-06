describe('Edit Account Information Test', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/')
    cy.login_simple('99emailakun@gmail.com', '123Dummy')
    cy.visit('/customer/account/edit/')
  })

  it('Successfully edits account information', () => {
    cy.get('#firstname').clear().type('NewFirstName')
    cy.get('#lastname').clear().type('NewLastName')
    cy.get('button[title="Save"]').click()

    // Assertion
    cy.get('.message-success').should('contain', 'You saved the account information.')
  })

  it('Successfully edits email information', () => {
    cy.get('#change-email').check()
    cy.get('#email').clear().type('99emailakun@gmail.com')
    cy.get('#current-password').clear().type('123Dummy')
    cy.get('button[title="Save"]').click()

    // Assertion
    cy.visit('/customer/account/login/')
    cy.get('.message-success').should('contain', 'You saved the account information.')
  })

  it('Successfully edits password information', () => {
    cy.get('#change-password').click()
    cy.get('#current-password').clear().type('123Dummy')
    cy.get('#password').clear().type('123Dummy')
    cy.get('#password-confirmation').clear().type('123Dummy')
    cy.get('button[title="Save"]').click()

    // Assertion
    cy.visit('/customer/account/login/')
    cy.get('.message-success').should('contain', 'You saved the account information.')
  })
})