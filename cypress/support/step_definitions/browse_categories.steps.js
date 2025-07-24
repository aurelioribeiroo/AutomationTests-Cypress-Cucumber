import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CategoryPage from "../../pages/CategoryPage";

When("seleciono uma categoria de produto", () => {
  CategoryPage.openFirstCategory();
});

Then("produtos da categoria devem ser exibidos", () => {
  CategoryPage.verifyCategoryDisplayed();
});