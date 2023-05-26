import React from "react";

export default class ProductTitles extends React.Component {
  render() {
    const { singleProduct } = this.props;
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
}
