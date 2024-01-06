describe('Edit Address Test', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/')
    cy.login_simple('99emailakun@gmail.com', '123Dummy')
    cy.visit('/customer/address/edit/')
  })

  it('Successfully edits address', () => {
    cy.get('#telephone').clear().type('085140224990')
    cy.get('#street_1').clear().type('123 New Street')
    cy.get('#city').clear().type('New City')
    cy.get('#region_id').select('Washington')
    cy.get('#zip').clear().type('98831')
    cy.get('#country').select('US')

    cy.get('button[title="Save Address"]').click()

    // Assertion
    cy.visit('/customer/address/index/')
    cy.get('.message-success').should('contain', 'You saved the address.')
  })
})