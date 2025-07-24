import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AccountPage from "../../pages/AccountPage";
import LoginPage from "../../pages/LoginPage";

Given("que estou logado", () => {
  cy.visit("/");
  cy.contains("Signup / Login").click();
  LoginPage.fillLoginForm("testuser@example.com", "123456");
  LoginPage.submitLogin();
});
When("acesso a opção de exclusão de conta", () => {
  AccountPage.deleteAccount();
});
Then("minha conta deve ser excluída com sucesso", () => {
  AccountPage.verifyAccountDeleted();
});