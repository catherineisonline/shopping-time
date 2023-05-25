import React from "react";
import Product from "../AllProductsPage/Product";
import CategoryAllHero from '../../images/product-listing-images/category-all-hero.mp4'
import CategoryDressesHero from '../../images/product-listing-images/category-dresses-hero.mp4'
import CategoryBlousesHero from '../../images/product-listing-images/category-blouses-hero.mp4'
import CategoryShoesHero from '../../images/product-listing-images/category-shoes-hero.mp4'
import CategoryJeansHero from '../../images/product-listing-images/category-jeans-hero.mp4'


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
          <h2>{activeCategory === 'all' ? "Boost your style sense!" : activeCategory === 'dresses' ? "Let's create your own style" : activeCategory === 'blouses' ? "The joy of dressing" : activeCategory === 'shoes' ? "Unlock your style" : activeCategory === 'jeans' ? "Fashion never sleeps" : "Boost your style sense!"}</h2>
          <video autoPlay loop muted playsInline className="hero-video" key={activeCategory}>
            <source src={activeCategory === 'all' ? CategoryAllHero : activeCategory === 'dresses' ? CategoryDressesHero : activeCategory === 'blouses' ? CategoryBlousesHero : activeCategory === 'shoes' ? CategoryShoesHero : activeCategory === 'jeans' ? CategoryJeansHero : CategoryAllHero} type="video/mp4" />
          </video>
        </article>
        <article className="product-listing-page">
          <h3>{activeCategory}</h3>
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
