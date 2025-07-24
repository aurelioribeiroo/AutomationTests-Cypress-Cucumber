import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pages/ProductPage";

When("busco pelo termo {string}", (termo) => {
  ProductPage.search(termo);
});

Then("produtos relacionados à busca devem ser exibidos", () => {
  ProductPage.verifySearchResult();
});