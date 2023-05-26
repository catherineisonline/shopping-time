import React from "react";
import Attribute from "../../components/attributes/Attribute.js";
import AddToCartButton from "../../components/AddToCartButton.js";
import ProductShowcase from "./ProductShowcase.js";
import ProductTitles from "./ProductTitles.js";
import {
  itemsObj
} from "../../prodcuts-data";

export default class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: "",
      selectedAttributes: [],
      allAttributesAreSelected: false,
      captureNoAttributes: [],
      singleProduct: {},
      selectedImage: 0,
      cart: [],
      cartItems: [],
      productAlreadyInCart: [],
      updatedProductList: [],
      indexOfProduct: 0,
      products: [],
      priceAmount: "",
      selectedCurrency: "$",
      coverImage: ''
    };
    this.handleSelectedAttributes = this.handleSelectedAttributes.bind(this);
    this.handleAllAttributesAreSelected =
      this.handleAllAttributesAreSelected.bind(this);
  }
  filterCurrency(item, selectedCurrency) {
    this.setState({ selectedCurrency: selectedCurrency });
    item?.prices?.filter((price) => {
      const correctPrices = price.currency.symbol === selectedCurrency;
      this.setState({ pricing: price });
      if (correctPrices) {
        this.setState({ priceAmount: price.amount.toFixed(2) });
      }
      return correctPrices;
    });
  }

  GetProductById(uniqueId) {
    let targetproduct = '';
    itemsObj.map((item) => {
      const targetItem = (Object.values(item).filter(item => item === uniqueId)[0])
      if (item.id === targetItem) {
        targetproduct = item;
        this.setState({ coverImage: item.gallery[0] })
        this.setState({ singleProduct: item });
      }

    })
    this.setState({ captureNoAttributes: targetproduct.attributes });
    document.querySelector(".description").innerHTML =
      targetproduct.description;
    this.filterCurrency(targetproduct, this.props.selectedCurrency);
    if (targetproduct.attributes.length === 0) {
      this.handleAllAttributesAreSelected();
    }
  }
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
  //Cancel Cart Overlay
  /********************************************************/
  toggleQuickAddToCart = () => {
    return;
  };

  // RENDER & UPDATE
  /*********************************************************************/
  componentDidMount() {
    ///Need to change url like store/category/id
    this.GetProductById(window.location.pathname.toString().substring(1));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.selectedCurrency !== nextProps.selectedCurrency) {
      this.filterCurrency(this.state.singleProduct, nextProps.selectedCurrency);
    }
    if (
      this.state.selectedAttributes !== nextState.selectedAttributes &&
      nextState.selectedAttributes.length ===
      this.state.singleProduct.attributes.length
    ) {
      this.handleAllAttributesAreSelected();
    }

    return true;
  }

  render() {
    const { handleAddProduct, alertMessageMain } = this.props;
    const {
      singleProduct,
      selectedAttributes,
      allAttributesAreSelected,
      priceAmount,
      selectedCurrency
    } = this.state;
    return (
      <main>
        <ProductTitles singleProduct={singleProduct} />
        <section className="single-product">
          <ProductShowcase singleProduct={singleProduct} />
          <section className="data">
            {singleProduct?.attributes?.map((attribute) => (
              <Attribute
                className="attribute"
                key={attribute.id}
                attribute={attribute}
                handleSelectedAttributes={this.handleSelectedAttributes}
                selectedAttributes={selectedAttributes}
              />
            ))}
            <section className="pricing-section">
              <h3 className="price-title"> Price:</h3>
              <div className="single-product-pricing">
                <p className="product-price">
                  {selectedCurrency}
                  {priceAmount}
                </p>
              </div>
            </section>
            <AddToCartButton
              className="addtocart"
              alertMessageMain={alertMessageMain}
              handleAddProduct={handleAddProduct}
              item={singleProduct}
              allAttributesAreSelected={allAttributesAreSelected}
              handleSelectedAttributes={this.handleSelectedAttributes}
              selectedAttributes={selectedAttributes}
              toggleQuickAddToCart={this.toggleQuickAddToCart}
            />
            <section className="description"></section>
          </section>
        </section>
      </main>
    );
  }
}
