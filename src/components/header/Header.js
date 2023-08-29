import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../cart-overlay/CartIcon.js";
import SuccessMessage from "../SuccessMessage.js";
import CategoryMenu from "./CategoryMenu.js";
import CurrencyIcon from "../currency-overlay/CurrencyIcon.js";
import "./header.css";

const Navigation = ({ allCategories,
  changeCategory,
  activeCategory,
  selectedCurrency,
  allCurrencies,
  changeCurrency,
  amountOfItems,
  totalPayment,
  productsQuantity,
  handleRemoveProduct,
  handleAddProduct,
  cartItems }) => {

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          onClick={() => {
            changeCategory("");
          }}
          className="header-one"
        >
          <h1>Shopping Time</h1>
        </NavLink>
        <CategoryMenu
          allCategories={allCategories}
          changeCategory={changeCategory}
          activeCategory={activeCategory}
        />
        <section className="icons-section">
          <CurrencyIcon
            selectedCurrency={selectedCurrency}
            allCurrencies={allCurrencies}
            changeCurrency={changeCurrency}
          />

          <CartIcon
            handleRemoveProduct={handleRemoveProduct}
            handleAddProduct={handleAddProduct}
            productsQuantity={productsQuantity}
            amountOfItems={amountOfItems}
            totalPayment={totalPayment}
            cartItems={cartItems}
            selectedCurrency={selectedCurrency}
          />
        </section>
      </nav>

      <SuccessMessage />
    </header>
  );
}


export default Navigation;