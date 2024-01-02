import "cypress-xpath";

//login
Cypress.Commands.add("login", (email, password) => {
  cy.visit(
    "/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/"
  );
  cy.xpath('//*[@id="email"]').type(email);
  cy.xpath('//*[@id="pass"]').type(password);
  cy.xpath('//*[@id="send2"]').click();
});

// Command untuk membuat akun
Cypress.Commands.add("createAccount", (email, password) => {
  cy.visit("/customer/account/create/");
  cy.get("#firstname").type("FirstName");
  cy.get("#lastname").type("LastName");
  cy.get("#email_address").type(email);
  cy.get("#password").type(password);
  cy.get("#password-confirmation").type(password);
  cy.get('button[title="Create an Account"]').click();
});

import "./commands";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
