import React from "react";
import { Link } from "react-router-dom";
import CartOverlayItem from "./CartOverlayItem.js";
import "./cart-overlay.css"

const CartOverlay = ({ totalPayment,
  cartItems,
  selectedCurrency,
  ToggleCartOverlay,
  productsQuantity,
  handleAddProduct,
  handleRemoveProduct }) => {
  return (
    <React.Fragment>
      {productsQuantity === 0 ? (
        <section className="cart-overlay">
          {productsQuantity === 1 ? (
            <h4>
              My cart, <span>{productsQuantity} items</span>
            </h4>
          ) : (
            <h4>
              My cart, <span>{productsQuantity} items</span>
            </h4>
          )}
          <p className="empty-cart">
            Looks like you haven't added anything to your cart yet
          </p>
        </section>
      ) : (
        <section className="cart-overlay">
          {productsQuantity === 1 ? (
            <h4>
              My cart, <span>{productsQuantity} items</span>
            </h4>
          ) : (
            <h4>
              My cart, <span>{productsQuantity} items</span>
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
          <section className="all-products-totals">
            <p>Total:</p>
            <p>
              {selectedCurrency}
              {totalPayment}
            </p>
          </section>
          <section className="all-products-payment">
            <Link onClick={ToggleCartOverlay} className="view-bag" to="/cart">
              View cart
            </Link>
            <Link onClick={ToggleCartOverlay} className="check-out" to="/checkout">
              Check out
            </Link>
          </section>
        </section>
      )}
    </React.Fragment>
  );
}

export default CartOverlay;