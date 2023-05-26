import React from "react";

export default class ProductTitles extends React.Component {
  render() {
    const { singleProduct } = this.props;
    return (
      <section className="product-titles">
        <p className="single-product-category">
          Store / {singleProduct.category}
        </p>
        <h2 className="single-product-brand">{singleProduct.brand}</h2>
        <h2 className="single-product-name">{singleProduct.name}</h2>
      </section>
    );
  }
}
