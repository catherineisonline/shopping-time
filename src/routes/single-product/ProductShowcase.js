import React from "react";

const ProductShowcase = ({ singleProduct }) => {
  return (
    <React.Fragment>
      {singleProduct && singleProduct.gallery && (
        <section className="product-showcase">
          {singleProduct.gallery.map((image, index) => (
            <img key={`image-number-${index}`} src={image} alt="" />
          ))}
        </section>
      )}
    </React.Fragment>
  );
}

export default ProductShowcase;