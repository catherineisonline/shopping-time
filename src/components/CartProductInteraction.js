import React from "react";

export default class CartProductInteraction extends React.Component {
  render() {
    const { handleRemoveProduct, handleAddProduct, singleProduct, className } =
      this.props;
    return (
      <section className={className}>
        <button
          onClick={() =>
            handleAddProduct(
              singleProduct,
              singleProduct.userSelectedAttributes
            )
          }
        >
          +
        </button>
        <p>{singleProduct.quantity}</p>
        <button
          onClick={() =>
            handleRemoveProduct(
              singleProduct,
              singleProduct.userSelectedAttributes
            )
          }
        >
          -
        </button>
      </section>
    );
  }
}
