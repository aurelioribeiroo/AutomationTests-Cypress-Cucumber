import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pages/ProductPage";

When("clico em um produto", () => {
  ProductPage.openFirstProduct();
});

Then("devo visualizar os detalhes do produto", () => {
  ProductPage.verifyProductDetails();
});