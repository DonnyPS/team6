describe("Choose Product Test - Negative Scenario", () => {
  it("Gagal ketika product yang dicari tidak ada", () => {
    cy.login("luthfiyahnurarf@gmail.com", "Nurarofah02!"); //login account
    cy.xpath('//*[@id="search"]').type("swimsuit").type("{enter}"); //cari product
    cy.wait(2000);
  });
});
