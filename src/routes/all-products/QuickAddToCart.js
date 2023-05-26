import React from "react";
import Attribute from "../../components/attributes/Attributes.js";
import AddToCartButton from "../../components/AddToCartButton.js";

export default class QuickAddToCart extends React.Component {
  render() {
    const {
      item,
      handleAddProduct,
      handleSelectedAttributes,
      selectedAttributes,
      allAttributesAreSelected,
      removeQuickAddToCart,
      alertMessageMain,
      toggleQuickAddToCart,
    } = this.props;
    return (
      <section className="quick-addto-cart">
        {item?.attributes?.map((attribute) => (
          <Attribute
            className="quick-attribute"
            key={attribute.id}
            attribute={attribute}
            handleSelectedAttributes={handleSelectedAttributes}
            selectedAttributes={selectedAttributes}
          />
        ))}
        <AddToCartButton
          className="quick-addtocart"
          handleAddProduct={handleAddProduct}
          item={item}
          allAttributesAreSelected={allAttributesAreSelected}
          selectedAttributes={selectedAttributes}
          alertMessageMain={alertMessageMain}
          toggleQuickAddToCart={toggleQuickAddToCart}
        />
        <p className="close-quickbuy" onClick={removeQuickAddToCart}>
          close
        </p>
      </section>
    );
  }
}
