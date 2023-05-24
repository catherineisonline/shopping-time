import React from "react";

export default class ProductShowcase extends React.Component {
  render() {
    const { singleProduct } = this.props;
    return (
      <>
        {singleProduct && singleProduct.gallery && (
          <section className="product-showcase">
            {singleProduct.gallery.map((image, index) => (
              <img key={`image-number-${index}`} src={image} alt="" />
            ))}
          </section>
        )}
      </>
    );
  }
}
