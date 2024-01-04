describe('Edit Account Information Test', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    })

    it('Successfully edits account information', () => {
      cy.get('#firstname').clear().type('NewFirstName')
      cy.get('#lastname').clear().type('NewLastName')
      cy.get('button[title="Save"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'You saved the account information.')
    })

    it('Successfully edits email information', () => {
      cy.get('checkbox[title="Change Email"]').click()
      cy.get('#email').clear().type('newemail@example.com')
      cy.get('#current-password').clear().type('Password123')
      cy.get('button[title="Save"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'You saved the account information.')
    })

    it('Successfully edits email information', () => {
      cy.get('checkbox[title="Change Password"]').click()
      cy.get('#current-password').clear().type('Password123')
      cy.get('#password').clear().type('123Password')
      cy.get('#password-confirmation').clear().type('123Password')
      cy.get('button[title="Save"]').click()
  
      // Assertion
      cy.get('.message-success').should('contain', 'You saved the account information.')
    })
})