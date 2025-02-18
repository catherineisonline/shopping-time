import React, { useEffect, useRef, useState } from "react";
import EmptyCart from "../../assets/images/cart-icon.png";
import CartOverlay from "./CartOverlay.jsx";
import { ResetLocation } from "../../helpers/ResetLocation.jsx";

const CartIcon = ({ totalPayment,
  cartItems,
  selectedCurrency,
  productsQuantity,
  handleAddProduct,
  handleRemoveProduct, activeMenu, clearCart, setActiveMenu }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const cartIcon = useRef(null);

  const toggleCartOverlay = () => {
    setToggleCart(!toggleCart)
    setActiveMenu(false)
  };
  const removeCartOverlay = () => {
    setToggleCart(false);
    ResetLocation();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cartIcon.current && !cartIcon.current.contains(e.target)) {
        setToggleCart(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section className="cart-icon-section" ref={cartIcon}>
      <section className="cart-icon" onClick={toggleCartOverlay}>
        <img src={EmptyCart} alt="empty cart" className="cart-icon" width={50} height={50} />
        {productsQuantity > 0 && <p className="cart-quantity">{productsQuantity}</p>}
      </section>
      {toggleCart &&
        <CartOverlay
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          productsQuantity={productsQuantity}
          cartItems={cartItems}
          selectedCurrency={selectedCurrency}
          totalPayment={totalPayment}
          activeMenu={activeMenu}
          removeCartOverlay={removeCartOverlay}
          clearCart={clearCart}
        />
      }
    </section>
  );
}


export default CartIcon;