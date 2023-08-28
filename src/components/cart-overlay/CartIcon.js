import React, { useEffect, useRef, useState } from "react";
import EmptyCart from "../../assets/images/cart-icon.png";
import CartOverlay from "./CartOverlay.js";

const CartIcon = ({ totalPayment,
  cartItems,
  selectedCurrency,
  productsQuantity,
  handleAddProduct,
  handleRemoveProduct }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const cartIcon = useRef(null);

  const toggleCartOverlay = () => {
    setDropdownMenu(!dropdownMenu)
  };
  const handleOutsideClick = (e) => {
    if (cartIcon.current && !cartIcon.current.contains(e.target)) {
      setDropdownMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <section
      ref={cartIcon}
    >
      <section className="cart-icon" onClick={toggleCartOverlay}>
        <img src={EmptyCart} alt="empty cart" className="cart-icon" />
        {productsQuantity > 0 ? (
          <p className="cart-quantity">{productsQuantity}</p>
        ) : null}
      </section>

      {!dropdownMenu ? null : (
        <article className="cartoverlay-background">
          <CartOverlay
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            ToggleCartOverlay={toggleCartOverlay}
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


export default CartIcon;