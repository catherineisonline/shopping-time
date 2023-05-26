import React from "react";
import { Link } from "react-router-dom";
import QuickAddToCart from "./QuickAddToCart.js";
import addToCart from "../../assets/images/add-to-cart.png";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: "",
      selectedAttributes: [],
      allAttributesAreSelected: false,
      quickBuyVisible: false,
      quickAddToCartVisible: false,
      priceAmount: "",
    };
    this.filterCurrency = this.filterCurrency.bind(this);
    this.handleSelectedAttributes = this.handleSelectedAttributes.bind(this);
    this.handleAllAttributesAreSelected =
      this.handleAllAttributesAreSelected.bind(this);
    this.handleProductHasNoAttributes =
      this.handleProductHasNoAttributes.bind(this);
  }
  // HANDLE CURRENCY
  /*********************************************************************/
  filterCurrency = (item, selectedCurrency) => {
    const [correctPrice] =
      item?.prices?.filter(
        (price) => price.currency.symbol === selectedCurrency
      ) || [];
    this.setState({ priceAmount: correctPrice.amount.toFixed(2) });
    this.setState({ pricing: correctPrice });
  };
  //HANDLE ATTRIBUTES
  /*********************************************************************/
  handleSelectedAttributes = (attributeId, attributeValue) => {
    const newSelectedAttribute = { attributeId, attributeValue };
    const userSelectedAttributes = [...this.state.selectedAttributes];

    const existingAttribute = userSelectedAttributes.find(
      (attribute) => attribute.attributeId === newSelectedAttribute.attributeId
    );

    if (existingAttribute) {
      for (let i = 0; i < userSelectedAttributes.length; i++) {
        if (
          userSelectedAttributes[i].attributeId ===
          newSelectedAttribute.attributeId
        ) {
          userSelectedAttributes[i] = { ...newSelectedAttribute };
        }
      }
    } else {
      userSelectedAttributes.push(newSelectedAttribute);
    }
    this.setState({ selectedAttributes: userSelectedAttributes });
  };
  // Check if attributes are selected
  /*******************************************************************/
  handleAllAttributesAreSelected = () => {
    this.setState({ allAttributesAreSelected: true });
  };
  //Filter out produt with no attributes
  /********************************************************/
  handleProductHasNoAttributes = () => {
    if (this.props.item.attributes.length === 0) {
      this.handleAllAttributesAreSelected();
    }
  };
  //Toggle Cart Overlay
  /********************************************************/
  toggleQuickAddToCart = () => {
    if (!this.state.quickAddToCartVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState({
      quickAddToCartVisible: !this.state.quickAddToCartVisible,
    });
  };
  //Handle Outside Click
  /********************************************************/
  handleOutsideClick = (e) => {
    if (
      !this.node.contains(e.target) &&
      !e.target.classList.contains("close-quickbuy")
    ) {
      return this.toggleQuickAddToCart();
    }
  };
  //Remove quick buy
  /********************************************************/
  removeQuickAddToCart = () => {
    this.setState({ quickAddToCartVisible: false });
  };
  removeCardShadow(e) {
    e.preventDefault();
    const singleProduct = document.querySelectorAll(".product-card");
    singleProduct.forEach((card) => {
      card.classList.remove("product-shadow");
    });
  }
  addCardShadow(e) {
    e.preventDefault();

    const singleProduct = document.querySelectorAll(".product-card");
    const cardImages = document.querySelectorAll(".item-preview-img");
    singleProduct.forEach((card) => {
      cardImages.forEach((image) => {
        if (e.target.contains(card)) {
          e.target.classList.add("product-shadow");
        }
        //if event targets image (bug)
        if (e.target.contains(image) && card.contains(image)) {
          card.classList.add("product-shadow");
        }
      });
    });
  }
  //Toglle quick buy
  /********************************************************/
  toggleQuickBuyButton() {
    if (this.props.item.inStock) {
      this.setState({ quickBuyVisible: !this.state.quickBuyVisible });
      if (this.state.quickAddToCartVisible) {
        this.setState({ quickBuyVisible: false });
      }
    }
  }
  //Remove quick buy
  /********************************************************/
  removeQuickBuyButton() {
    this.setState({ quickBuyVisible: false });
  }

  // RENDER & UPDATE
  /*********************************************************************/
  componentDidMount() {
    this.filterCurrency(this.props.item, this.props.selectedCurrency);
    this.handleProductHasNoAttributes();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.selectedCurrency !== nextProps.selectedCurrency) {
      this.filterCurrency(this.props.item, nextProps.selectedCurrency);
    }
    if (
      this.state.selectedAttributes !== nextState.selectedAttributes &&
      nextState.selectedAttributes.length === this.props.item.attributes.length
    ) {
      this.handleAllAttributesAreSelected();
    }
    return true;
  }

  render() {
    const { item, handleAddProduct, alertMessageMain } =
      this.props;
    const {
      allAttributesAreSelected,
      selectedAttributes,
      pricing,
      priceAmount,
      quickBuyVisible,
      quickAddToCartVisible,
    } = this.state;
    return (
      <section
        className="product"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div
          className="product-card"
          style={!item.inStock ? { opacity: "0.55" } : { opacity: "1" }}
          onMouseEnter={(e) => {
            this.toggleQuickBuyButton();
            this.addCardShadow(e);
          }}
          onMouseLeave={(e) => {
            this.removeQuickBuyButton();
            this.removeCardShadow(e);
          }}
        >
          <Link to={`/${item.id}`} className="item-preview">
            <div className="img-container">
              {!item.inStock && (
                <p className="out-of-stock-sign">OUT OF STOCK</p>
              )}
              <div
                className="item-preview-img"
                style={{ backgroundImage: `url(${item.gallery[0]})` }}
              ></div>
            </div>
          </Link>
          <div className="product-card-infromation">
            <div>
              <p className="brand-name">
                {item.brand} {item.name}
              </p>
              <p className="product-price">
                {pricing?.currency?.symbol}
                {priceAmount}
              </p>
            </div>
            {!quickBuyVisible ? null : (
              <img
                className="quick-buy"
                src={addToCart}
                onClick={this.toggleQuickAddToCart}
                alt="Add to cart icon"
              />
            )}
          </div>
        </div>

        {!quickAddToCartVisible ? null : (
          <QuickAddToCart
            key={item.name}
            handleAddProduct={handleAddProduct}
            item={item}
            allAttributesAreSelected={allAttributesAreSelected}
            handleSelectedAttributes={this.handleSelectedAttributes}
            selectedAttributes={selectedAttributes}
            removeQuickAddToCart={this.removeQuickAddToCart}
            alertMessageMain={alertMessageMain}
            toggleQuickAddToCart={this.toggleQuickAddToCart}
          />
        )}
      </section>
    );
  }
}
