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

