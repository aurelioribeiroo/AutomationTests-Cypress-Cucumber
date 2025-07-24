class SignupPage {
  fillSignupForm(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  fillAccountDetails(password, day, month, year) {
    cy.get("#id_gender1").check();
    cy.get("#password").type(password);
    cy.get("#days").select(day);
    cy.get("#months").select(month);
    cy.get("#years").select(year);
  }

  fillAddressDetails(firstName, lastName, address, state, city, zipcode, mobile) {
    cy.get("#first_name").type(firstName);
    cy.get("#last_name").type(lastName);
    cy.get("#address1").type(address);
    cy.get("#state").type(state);
    cy.get("#city").type(city);
    cy.get("#zipcode").type(zipcode);
    cy.get("#mobile_number").type(mobile);
  }

  submitAccount() {
    cy.get('[data-qa="create-account"]').click();
  }

  verifyAccountCreated() {
    cy.contains("Account Created!").should("be.visible");
  }
}
export default new SignupPage();