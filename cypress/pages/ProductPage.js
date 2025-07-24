class ProductPage {
  search(term) {
    cy.get("#search_product").type(term);
    cy.get("#submit_search").click();
  }

  verifySearchResult() {
    cy.contains("Searched Products").should("be.visible");
  }

  openFirstProduct() {
    cy.get(".product-image-wrapper").first().click();
  }

  verifyProductDetails() {
    cy.get(".product-information").should("be.visible");
  }

  hoverAndAddFirstProductToCart() {
    cy.get(".product-image-wrapper").first().trigger("mouseover");
    cy.contains("Add to cart").click();
  }
}
export default new ProductPage();