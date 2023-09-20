import React, { useEffect, useState } from "react";
import Product from "./Product.js";
import CategoryAllHero from '../../assets/images/product-listing-images/category-all-hero.mp4'
import CategoryDressesHero from '../../assets/images/product-listing-images/category-dresses-hero.mp4'
import CategoryBlousesHero from '../../assets/images/product-listing-images/category-blouses-hero.mp4'
import CategoryShoesHero from '../../assets/images/product-listing-images/category-shoes-hero.mp4'
import CategoryJeansHero from '../../assets/images/product-listing-images/category-jeans-hero.mp4'
import "./all-products.css";


const AllProducts = ({ allProducts,
  activeCategory,
  selectedCurrency,
  handleAddProduct,
  alertMessageMain,
  productId }) => {

  const [quickAddToCartVisible, setQuickAddToCartVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    document.title = `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} | Shopping Time`;
  }, [activeCategory]);

  const toggleQuickCart = () => {
    setQuickAddToCartVisible(!quickAddToCartVisible);
  }
  const removeQuickAddToCart = () => {
    setQuickAddToCartVisible(false);
  };

  return (
    <article>
      <article className="products-hero">
        <h2>{activeCategory === 'all' ? "Boost your style sense!" : activeCategory === 'dresses' ? "Let's create your own style" : activeCategory === 'blouses' ? "The joy of dressing" : activeCategory === 'shoes' ? "Unlock your style" : activeCategory === 'jeans' ? "Fashion never sleeps" : "Boost your style sense!"}</h2>
        <video autoPlay loop muted playsInline key={activeCategory}>
          <source src={activeCategory === 'all' ? CategoryAllHero : activeCategory === 'dresses' ? CategoryDressesHero : activeCategory === 'blouses' ? CategoryBlousesHero : activeCategory === 'shoes' ? CategoryShoesHero : activeCategory === 'jeans' ? CategoryJeansHero : CategoryAllHero} type="video/mp4" />
        </video>
      </article>
      <article className="product-listing-page">
        <h3 className="active-category">{activeCategory}</h3>
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
                toggleQuickCart={toggleQuickCart}
                quickAddToCartVisible={quickAddToCartVisible}
                removeQuickAddToCart={removeQuickAddToCart}
                activeCategory={activeCategory}
                setQuickAddToCartVisible={setQuickAddToCartVisible}
                setActiveItem={setActiveItem}
                activeItem={activeItem}
              />
            ))
            : "Loading..."}
        </section>
      </article>
    </article>
  );
}


export default AllProducts;