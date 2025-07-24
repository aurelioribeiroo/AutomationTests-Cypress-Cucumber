class LoginPage {
  fillLoginForm(email, password) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
  }

  submitLogin() {
    cy.get('[data-qa="login-button"]').click();
  }
}
export default new LoginPage();
