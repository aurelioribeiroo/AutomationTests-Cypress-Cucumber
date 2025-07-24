class ContactPage {
  openContactForm() {
    cy.contains("Contact us").click();
  }

  fillForm(name, email, subject, message) {
    cy.get('[data-qa="name"]').type(name);
    cy.get('[data-qa="email"]').type(email);
    cy.get('[data-qa="subject"]').type(subject);
    cy.get('[data-qa="message"]').type(message);
    cy.get('[data-qa="submit-button"]').click();
  }

  verifySuccessMessage() {
    cy.contains("Success! Your details have been submitted successfully.").should("be.visible");
  }
}
export default new ContactPage();