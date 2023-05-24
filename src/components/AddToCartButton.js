import React from "react";

export default class AddToCartButton extends React.Component {
  render() {
    const {
      item,
      allAttributesAreSelected,
      selectedAttributes,
      handleAddProduct,
      className,
      alertMessageMain,
      toggleQuickAddToCart,
    } = this.props;
    return (
      <div className={className}>
        <button
          onClick={() => {
            handleAddProduct(item, selectedAttributes);
            alertMessageMain();
            toggleQuickAddToCart();
          }}
          className={
            item.inStock && allAttributesAreSelected
              ? "active-add-to-cart"
              : "inactive-add-to-cart"
          }
          disabled={!item.inStock || !allAttributesAreSelected}
        >
          {item.inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </button>
      </div>
    );
  }
}
