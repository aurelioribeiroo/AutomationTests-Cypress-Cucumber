import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

Given("que estou com itens no carrinho", () => {
  cy.visit("/products");
  ProductPage.hoverAndAddFirstProductToCart();
  cy.contains("Continue Shopping").click();
});

When("acesso a página de checkout", () => {
  CartPage.openCart();
  CartPage.proceedToCheckout();
});

When("informo os dados de pagamento", () => {
  CartPage.placeOrder("Pedido de teste");
  CartPage.fillPaymentDetails("Usuário Teste", "1234123412341234", "123", "12", "2030");
});

Then("a compra deve ser finalizada com sucesso", () => {
  CartPage.verifyOrderSuccess();
});