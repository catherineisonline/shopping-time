import React from "react";

const ProductTitles = ({ singleProduct }) => {
  return (
    <section className="single-product-titles">
      <p className="category">
        Store / {singleProduct.category}
      </p>
      <h2 className="brand">{singleProduct.brand}</h2>
      <h2 className="name">{singleProduct.name}</h2>
    </section>
  );
}

export default ProductTitles;
