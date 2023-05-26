import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../cart-overlay/CartIcon.js";
import Alert from "../Alert.js";
import CategoryMenu from "./CategoryMenu.js";
import CurrencyIcon from "../currency-overlay/CurrencyIcon.js";
import "./header.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownMenu: false,
    };
  }
  toggleCurrencyMenu = () => {
    if (!this.state.dropdownMenu) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState({
      dropdownMenu: !this.state.dropdownMenu,
    });
  };

  render() {
    const {
      allCategories,
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
      cartItems,
    } = this.props;
    const { dropdownMenu } = this.state;
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
              toggleCurrencyMenu={this.toggleCurrencyMenu}
              dropdownMenu={dropdownMenu}
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

        <Alert />
      </header>
    );
  }
}
