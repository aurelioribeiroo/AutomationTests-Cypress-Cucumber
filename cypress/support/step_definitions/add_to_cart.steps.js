import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pages/ProductPage";

When("visualizo um produto", () => {
  //ProductPage.hoverProduct();
});
When("clico em {string}", (texto) => {
  cy.contains(texto).click();
});
Then("o produto deve ser adicionado ao carrinho com sucesso", () => {
  cy.contains("View Cart").should("be.visible");
});