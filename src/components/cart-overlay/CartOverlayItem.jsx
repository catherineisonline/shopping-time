import React from "react";
import SelectedAttributes from "../attributes/SelectedAttributes.jsx";
import ChangeCartItemQuantity from "../ChangeCartItemQuantity.jsx";

export default class CartOverlayItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: "",
      pricingCurrencySymbol: "",
      pricingAmount: "",
      priceAmount: "",
    };
    this.filterCurrency = this.filterCurrency.bind(this);
  }
  GetPricing = () => {
    this.setState({
      pricing: this.getPrice(
        this.props.singleProduct.prices,
        this.props.selectedCurrency
      ),
    });
  };
  filterCurrency = (item, selectedCurrency) => {
    const [correctPrice] = item?.prices?.filter((price) => {
      return price.currency.symbol === selectedCurrency;
    });
    this.setState({ priceAmount: correctPrice.amount.toFixed(2) });
    this.setState({ pricing: correctPrice });
  };

  getPrice = (prices, currency) => {
    const [correctPrice] = prices.filter(
      (price) => price.currency.symbol === currency
    );
    this.setState({ priceAmount: correctPrice.amount.toFixed(2) });
    return correctPrice;
  };
  componentDidMount() {
    this.GetPricing();
    this.setState({
      pricingCurrencySymbol: this.state.pricing?.currency?.symbol,
    });
    this.setState({ pricingCurrencySymbol: this.state.pricing?.amount });
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.selectedCurrency !== nextProps.selectedCurrency) {
      this.filterCurrency(this.props.singleProduct, nextProps.selectedCurrency);
    }
    return true;
  }
  render() {
    const { singleProduct, handleAddProduct, handleRemoveProduct } = this.props;

    const { pricing, priceAmount } = this.state;
    return (
      <article className="cartoverlay-products-single">
        <section className="cart-overlay-item">
          <section>
            <section className="titles-block">
              <h4>{singleProduct.name}</h4>
                <p className="product-price">
                  {pricing?.currency?.symbol}
                  {priceAmount}
                </p>
            </section>

            {singleProduct?.attributes?.map((attribute) => (
              <SelectedAttributes
                className="cart-overlay-item-attr"
                key={attribute.id}
                attribute={attribute}
                userSelectedAttributes={singleProduct.userSelectedAttributes}
                singleProduct={singleProduct}
              />
            ))}
          </section>
        </section>
        <ChangeCartItemQuantity
          className="cartoverlay-product-interaction"
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          singleProduct={singleProduct}
        />
        <img
          src={singleProduct.gallery[0]}
          alt={singleProduct.name}
        />
      </article>
    );
  }
}
