import React from "react";
import EmptyCart from "../../assets/images/cart-icon.png";
import CartOverlay from "./CartOverlay.js";

export default class CartIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  ToggleCartOverlay = () => {
    if (!this.state.isVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  handleOutsideClick = (e) => {
    e.preventDefault();

    const cartOverlayBg = document.querySelector(".cartoverlay-background");
    if (!this.node.contains(e.target)) {
      return this.ToggleCartOverlay();
    }
    if (e.target.contains(cartOverlayBg)) {
      return this.ToggleCartOverlay();
    }
  };
  render() {
    const {
      totalPayment,
      cartItems,
      selectedCurrency,
      productsQuantity,
      handleAddProduct,
      handleRemoveProduct,
    } = this.props;
    const { isVisible } = this.state;
    return (
      <section
        ref={(node) => {
          this.node = node;
        }}
      >
        <section className="cart-icon" onClick={this.ToggleCartOverlay}>
          <img src={EmptyCart} alt="empty cart" />
          {productsQuantity > 0 ? (
            <p className="cart-quantity">{productsQuantity}</p>
          ) : null}
        </section>

        {!isVisible ? null : (
          <article className="cartoverlay-background">
            <CartOverlay
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              ToggleCartOverlay={this.ToggleCartOverlay}
              productsQuantity={productsQuantity}
              cartItems={cartItems}
              selectedCurrency={selectedCurrency}
              totalPayment={totalPayment}
            />
          </article>
        )}
      </section>
    );
  }
}
