class SearchPage {
  search(term) {
    cy.get("#search_product").type(term);
    cy.get("#submit_search").click();
  }
  verifyResults() {
    cy.contains("Searched Products").should("be.visible");
  }
}
export default new SearchPage();