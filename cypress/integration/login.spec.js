import LoginPage from '../pages/LoginPage'
import user from '../fixtures/user.json'

describe('Login', () => {
  it('Should log in successfully', () => {
    const loginPage = new LoginPage()
    loginPage.visit()
    loginPage.fillEmail(user.email)
    loginPage.fillPassword(user.password)
    loginPage.submit()
    cy.contains('My Dashboard').should('be.visible')
  })
})
