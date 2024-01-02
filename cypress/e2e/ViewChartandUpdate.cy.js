describe("view shopping cart dan update", () => {
  it("Membuka keranjang belanja dan update", () => {
    cy.login("luthfiyahnurarf@gmail.com", "Nurarofah02!"); //login account
    cy.xpath("/html/body/div[2]/header/div[2]/div[1]/a").click({ force: true }); //klik icon keranjang
    cy.xpath('//*[@id="cart-558714-qty"]')
      .clear()
      .type("2")
      .should("have.value", "2"); //update quantitas barang
    cy.xpath('//*[@id="form-validate"]/div[2]/button[2]').click(); //klik tombol update
  });
});
