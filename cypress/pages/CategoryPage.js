class CategoryPage {
  openFirstCategory() {
    cy.get(".panel-group .panel-title a").first().click();
  }

  verifyCategoryDisplayed() {
    cy.get(".features_items").should("be.visible");
  }
}
export default new CategoryPage();