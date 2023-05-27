import React from "react";
import { Link } from "react-router-dom";
import CartOverlayItem from "./CartOverlayItem.js";
import "./cart-overlay.css"

export default class CartOverlay extends React.Component {
  render() {
    const {
      totalPayment,
      cartItems,
      selectedCurrency,
      ToggleCartOverlay,
      productsQuantity,
      handleAddProduct,
      handleRemoveProduct,
    } = this.props;
    return (
      <article className="cartoverlay">
        {productsQuantity === 0 ? (
          <section className="all-products">
            <h4>
              My Bag, <span>{productsQuantity} items</span>
            </h4>
            <p className="empty-cart">
              Looks like you haven't added anything to your cart yet
            </p>
          </section>
        ) : (
          <section className="all-products">
            {productsQuantity === 1 ? (
              <h4>
                My cart, <span>{productsQuantity} items</span>
              </h4>
            ) : (
              <h4>
                My Bag, <span>{productsQuantity} items</span>
              </h4>
            )}
            <section className="cartoverlay-grid">
              {cartItems?.map((singleProduct, index) => (
                <CartOverlayItem
                  key={index}
                  singleProduct={singleProduct}
                  selectedCurrency={selectedCurrency}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ))}
            </section>
            <section className="totals">
              <p>Total:</p>
              <p>
                {selectedCurrency}
                {totalPayment}
              </p>
            </section>
            <section className="payment">
              <Link onClick={ToggleCartOverlay} to="/cart">
                <button className="view-bag"> View cart </button>
              </Link>
              <Link onClick={ToggleCartOverlay} className="check-out" to="/checkout">
                Check out
              </Link>
            </section>
          </section>
        )}
      </article>
    );
  }
}
