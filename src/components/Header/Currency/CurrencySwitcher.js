import React from "react";
import Currency from "./Currency.js";
export default class CurrencySwitcher extends React.Component {
  render() {
    const { allCurrencies, changeCurrency, toggleCurrencyMenu } = this.props;
    return (
      <section className="currency-switcher">
        {allCurrencies ? (
          allCurrencies.map((currency) => (
            <Currency
              key={currency.label}
              currency={currency}
              changeCurrency={changeCurrency}
              toggleCurrencyMenu={toggleCurrencyMenu}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    );
  }
}
