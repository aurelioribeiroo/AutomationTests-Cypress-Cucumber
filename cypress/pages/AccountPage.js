class AccountPage {
  deleteAccount() {
    cy.contains("Delete Account").click();
  }
  verifyAccountDeleted() {
    cy.contains("Account Deleted!").should("be.visible");
  }
}
export default new AccountPage();