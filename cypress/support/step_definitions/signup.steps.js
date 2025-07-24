import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../../pages/SignupPage";

When("acesso a página de cadastro", () => {
  cy.contains("Signup / Login").click();
});
When("preencho os dados obrigatórios do formulário de cadastro", () => {
  SignupPage.fillSignupForm("Novo Usuario", `user_${Date.now()}@mail.com`);
  SignupPage.fillAccountDetails("123456", "10", "May", "1995");
  SignupPage.fillAddressDetails("Nome", "Sobrenome", "Rua X", "SP", "São Paulo", "12345", "11999999999");
  SignupPage.submitAccount();
});
Then("devo visualizar uma mensagem de conta criada com sucesso", () => {
  SignupPage.verifyAccountCreated();
});