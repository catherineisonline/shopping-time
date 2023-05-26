import React from "react";
export default class Currency extends React.Component {
  render() {
    const { currency, changeCurrency } = this.props;
    return (
      <p
        className="single-currency"
        onClick={() => {
          changeCurrency(currency.symbol);
        }}
      >
        {currency.symbol} {currency.label}
      </p>
    );
  }
}
