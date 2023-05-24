import React from "react";
import Product from "../AllProductsPage/Product";

export default class ProductListingPage extends React.Component {
  render() {
    const {
      allProducts,
      activeCategory,
      selectedCurrency,
      handleAddProduct,
      alertMessageMain,
      quickAddToCartVisible,
      removeQuickAddToCart,
      productId,
    } = this.props;
    return (
      <article className="category-page">
        <article className="products-hero">
          <h2>{activeCategory}</h2>
        </article>
        <article className="product-listing-page">
          <section className="store-products">
            {allProducts
              ? allProducts.map((item) => (
                  <Product
                    key={item.id}
                    item={item}
                    productId={productId}
                    selectedCurrency={selectedCurrency}
                    handleAddProduct={handleAddProduct}
                    alertMessageMain={alertMessageMain}
                    quickAddToCartVisible={quickAddToCartVisible}
                    removeQuickAddToCart={removeQuickAddToCart}
                    activeCategory={activeCategory}
                  />
                ))
              : "Loading..."}
          </section>
        </article>
      </article>
    );
  }
}
