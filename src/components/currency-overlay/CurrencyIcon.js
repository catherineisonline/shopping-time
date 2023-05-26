import React from "react";
import CurrencyOverlay from "./CurrencyOverlay.js";
import "./currency-overlay.css"

export default class CurrencyIcon extends React.Component {
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.toggleCurrencyMenu();
  };
  render() {
    const {
      toggleCurrencyMenu,
      dropdownMenu,
      selectedCurrency,
      allCurrencies,
      changeCurrency,
    } = this.props;

    return (
      <section
        onClick={toggleCurrencyMenu}
        className="initial-currency"
        ref={(node) => {
          this.node = node;
        }}
      >
        <p>
          {selectedCurrency}{" "}
          <span
            style={
              dropdownMenu === false ? null : { transform: "rotate(180deg)" }
            }
            className="arrow-icon"
          >
            ⌄
          </span>
        </p>
        {dropdownMenu && (
          <CurrencyOverlay
            allCurrencies={allCurrencies}
            changeCurrency={changeCurrency}
            dropdownMenu={dropdownMenu}
            toggleCurrencyMenu={this.toggleCurrencyMenu}
          />
        )}
      </section>
    );
  }
}
