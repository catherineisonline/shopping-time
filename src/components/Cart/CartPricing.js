import React from "react";

export default class CartPricing extends React.Component {

  render() {
    const { pricingCurrencySymbol, pricingAmount, className } = this.props;
    return (
      <div className={className}>
        <p className="product-price">
          {pricingCurrencySymbol}
          {pricingAmount}
        </p>
      </div>
    );
  }
}
