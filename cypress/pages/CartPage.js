class CartPage {
  openCart() {
    cy.contains("Cart").click();
  }

  proceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
  }

  placeOrder(message) {
    cy.get("textarea[name='message']").type(message);
    cy.contains("Place Order").click();
  }

  fillPaymentDetails(name, card, cvc, month, year) {
    cy.get("input[name='name_on_card']").type(name);
    cy.get("input[name='card_number']").type(card);
    cy.get("input[name='cvc']").type(cvc);
    cy.get("input[name='expiry_month']").type(month);
    cy.get("input[name='expiry_year']").type(year);
    cy.contains("Pay and Confirm Order").click();
  }

  verifyOrderSuccess() {
    cy.contains("Your order has been placed successfully!").should("be.visible");
  }
}
export default new CartPage();