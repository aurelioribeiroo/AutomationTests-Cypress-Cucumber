class CheckoutPage {
  fillPaymentDetails() {
    cy.get("textarea[name='message']").type("Teste de pedido");
    cy.get("input[name='name_on_card']").type("Usuario Teste");
    cy.get("input[name='card_number']").type("1234123412341234");
    cy.get("input[name='cvc']").type("123");
    cy.get("input[name='expiry_month']").type("12");
    cy.get("input[name='expiry_year']").type("2030");
  }
  confirmOrder() {
    cy.contains("Pay and Confirm Order").click();
  }
}
export default new CheckoutPage();