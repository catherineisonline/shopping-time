import React from "react";

export default class CurrencyOverlay extends React.Component {
  render() {
    const { allCurrencies, changeCurrency } = this.props;
    return (
      <section className="currency-switcher">
        {allCurrencies ? (
          allCurrencies.map((currency) => (
            <p
              className="single-currency"
              onClick={() => {
                changeCurrency(currency.symbol);
              }}
            >
              {currency.symbol} {currency.label}
            </p>
          ))
        ) : (
          <p>Loading...</p>
        )
        }
      </section>
    );
  }
}
