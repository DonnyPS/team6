describe("choose product", () => {
  it("Membuka halaman dan detail product", () => {
    cy.login("luthfiyahnurarf@gmail.com", "Nurarofah02!"); //login account
    cy.xpath('//*[@id="ui-id-3"]/span').click(); //klik menu what's new
    cy.xpath(
      '//*[@id="maincontent"]/div[4]/div[1]/div[2]/div[1]/a/span/span[2]'
    ).click(); //klik button shop new yoga
    cy.xpath(
      '//*[@id="maincontent"]/div[3]/div[1]/div[4]/ol/li[2]/div/a'
    ).click(); //klik salah satu produk yang dipilih
    cy.xpath('//*[@id="option-label-size-143-item-173"]').click(); //pilih ukuran
    cy.xpath('//*[@id="option-label-color-93-item-50"]').click(); //pilih warna
    cy.xpath('//*[@id="product-addtocart-button"]').click(); //klik button tambah keranjang
  });
});
