import React from "react";

const CurrencyOverlay = ({ allCurrencies, changeCurrency }) => {
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

export default CurrencyOverlay;
