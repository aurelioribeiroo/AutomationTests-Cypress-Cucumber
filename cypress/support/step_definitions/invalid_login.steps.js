import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("que estou na página de login", () => {
  cy.visit("/");
  cy.contains("Signup / Login").click();
});
When("insiro email e senha inválidos", () => {
  LoginPage.fillLoginForm("invalido@mail.com", "errado");
  LoginPage.submitLogin();
});
Then("devo visualizar uma mensagem de erro", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});