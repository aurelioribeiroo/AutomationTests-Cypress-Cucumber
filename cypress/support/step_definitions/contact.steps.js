import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactPage from "../../pages/ContactPage";

When("acesso a página de contato", () => {
  ContactPage.openContactForm();
});

When("preencho o formulário com nome, email e mensagem", () => {
  ContactPage.fillForm("Usuário", "usuario@email.com", "Dúvida", "Mensagem de contato");
});

Then("devo visualizar uma mensagem de sucesso de envio", () => {
  ContactPage.verifySuccessMessage();
});