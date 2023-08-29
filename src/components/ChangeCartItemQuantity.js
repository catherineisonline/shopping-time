import React from "react";

const ChangeCartItemQuantity = ({ handleRemoveProduct, handleAddProduct, singleProduct, className }) => {
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

export default ChangeCartItemQuantity;