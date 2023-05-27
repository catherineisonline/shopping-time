import React from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends React.Component {
  render() {
    const { totalPayment, productsQuantity, selectedCurrency, taxes } = this.props;
    return (
      <section className="cart-totals">
        <section>
          <p className="cart-totals-sum">Tax 21%:</p>
          <p>
            {selectedCurrency}
            {taxes}
          </p>
        </section>
        <section>
          <p className="cart-totals-sum">Quantity:</p>
          <p>{productsQuantity}</p>
        </section>
        <section>
          <p className="cart-totals-sum">Total:</p>
          <p>
            {selectedCurrency}
            {totalPayment}
          </p>
        </section>
        {/* <section></section> */}
        <Link to="/checkout" className="order-btn">Checkout</Link>
      </section>
    );
  }
}
