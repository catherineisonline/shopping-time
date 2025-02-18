import React from "react";
import { Link } from "react-router-dom";
import CartOverlayItem from "./CartOverlayItem.jsx";
import "./cart-overlay.css"
import activeHamburger from "../../assets/images/active-cart-overlay.png";


const CartOverlay = ({ totalPayment,
  cartItems,
  selectedCurrency,
  productsQuantity,
  handleAddProduct,
  handleRemoveProduct, activeMenu, removeCartOverlay, clearCart }) => {
  return (
      <section className={`cart-overlay ${activeMenu ? 'active-overlay' : ''}`}>
        <img className="cartoverlay-hamburger" src={activeHamburger} alt="toggle menu" onClick={() => removeCartOverlay()} />
        {productsQuantity === 1 ? (
          <h4 className="overlay-title">
            My cart, <span>{productsQuantity} items</span>
          </h4>
        ) : (
          <h4 className="overlay-title">
            My cart, <span>{productsQuantity} items</span>
          </h4>
        )}
        {cartItems.length === 0 ?
          <p className="empty-cart">
            Looks like you haven't added anything to your cart yet
          </p> :
          <React.Fragment>
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
              <Link onClick={() => { removeCartOverlay(); }} className="view-bag" to="/cart">
                View cart
              </Link>
              <button onClick={() => { clearCart(); removeCartOverlay() }} className="clear-cart" to="/checkout">
                Clear cart
              </button>
            </section>
          </React.Fragment>}
      </section>
  );
}

export default CartOverlay;