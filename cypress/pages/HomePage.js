class HomePage {
  clickSignupLogin() {
    cy.contains("Signup / Login").click();
  }

  verifyLoggedInUser(username) {
    cy.contains(`Logged in as ${username}`).should("be.visible");
  }
}
export default new HomePage();
