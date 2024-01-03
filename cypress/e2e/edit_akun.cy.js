describe('Edit Account Information Test', () => {
    it('Successfully edits account information', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
      cy.get('#firstname').clear().type('NewFirstName')
      cy.get('#lastname').clear().type('NewLastName')
      cy.get('button[title="Save"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'You saved the account information.')
    })
})

describe('Edit Email', () => {
  it('Successfully edits email information', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('checkbox[title="change-email"]').click()
    cy.get('#email').clear().type('newemail@example.com')
    cy.get('#current-password').clear().type('Password123')
    cy.get('button[title="Save"]').click()

    // Assertion
    cy.get('.message-success').should('contain', 'You saved the account information.')
  })
})

describe('Edit Password', () => {
  it('Successfully edits email information', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('checkbox[title="change-password"]').click()
    cy.get('#current-password').clear().type('Password123')
    cy.get('#password').clear().type('123Password')
    cy.get('#password-confirmation').clear().type('123Password')
    cy.get('button[title="Save"]').click()

    // Assertion
    cy.get('.message-success').should('contain', 'You saved the account information.')
  })
})