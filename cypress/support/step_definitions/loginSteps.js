import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

Given("que estou na página inicial", () => {
  cy.visit("/");
});

When("clico em SignupLogin", () => {
  HomePage.clickSignupLogin();
});

When("preencho o login com {string} e senha {string}", (email, senha) => {
  LoginPage.fillLoginForm(email, senha);
  LoginPage.submitLogin();
});

Then("devo ver o usuário logado como {string}", (usuario) => {
  HomePage.verifyLoggedInUser(usuario);
});
