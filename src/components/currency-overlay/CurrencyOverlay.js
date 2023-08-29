import React from "react";

const CurrencyOverlay = ({ allCurrencies, changeCurrency }) => {
  return (
    <section className="currency-switcher">
      {allCurrencies ? (
        allCurrencies.map((currency, index) => (
          <p
            key={index}
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
