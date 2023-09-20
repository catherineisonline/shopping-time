import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addToCart from "../../assets/images/add-to-cart.png";
import QuickAddToCart from './QuickAddToCart'

const Product = ({
  selectedCurrency, item, handleAddProduct, alertMessageMain, toggleQuickCart, removeQuickAddToCart
  , quickAddToCartVisible, setActiveItem, activeItem
}) => {
  const [pricing, setPricing] = useState("");
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [allAttributesAreSelected, setAllAttributesAreSelected] = useState(false);
  const [priceAmount, setPriceAmount] = useState("");
  const [imageShadow, setImageShadow] = useState(false);

  const filterCurrency = (item, selectedCurrency) => {
    const correctPrice = item?.prices?.find(
      (price) => price.currency.symbol === selectedCurrency
    );

    if (correctPrice) {
      setPriceAmount(correctPrice.amount.toFixed(2));
      setPricing(correctPrice);
    }
  };

  const handleSelectedAttributes = (attributeId, attributeValue) => {
    const newSelectedAttribute = { attributeId, attributeValue };
    const updatedAttributes = selectedAttributes.map(attribute =>
      attribute.attributeId === newSelectedAttribute.attributeId
        ? { ...newSelectedAttribute }
        : attribute
    );

    if (!updatedAttributes.some(attribute => attribute.attributeId === newSelectedAttribute.attributeId)) {
      updatedAttributes.push(newSelectedAttribute);
    }

    setSelectedAttributes(updatedAttributes);
  };

  const handleAllAttributesAreSelected = () => {
    setAllAttributesAreSelected(true);
  };

  const handleProductHasNoAttributes = () => {
    if (item.attributes.length === 0) {
      handleAllAttributesAreSelected();
    }
  };

  useEffect(() => {
    handleProductHasNoAttributes();
  }, []);

  useEffect(() => {
    handleProductHasNoAttributes();
  }, []);

  useEffect(() => {
    filterCurrency(item, selectedCurrency);
  }, [item, selectedCurrency]);

  useEffect(() => {
    if (selectedAttributes.length === item.attributes.length) {
      handleAllAttributesAreSelected();
    }
  }, [selectedAttributes, item.attributes.length]);

  return (
    <div
      className={`product-card ${imageShadow ? 'product-shadow' : ''}`}
      style={!item.inStock ? { opacity: "0.55" } : { opacity: "1" }}
      onMouseEnter={() => {
        setImageShadow(true);
      }}
      onMouseLeave={() => {
        setImageShadow(false);
      }}
    >
      <Link to={`/store/${item.id}`} className="item-preview">
        <div className="img-container">
          {!item.inStock && (
            <p className="out-of-stock-sign">OUT OF STOCK</p>
          )}
          <div
            className="item-preview-img"
            style={{ backgroundImage: `url(${item.gallery[0]})` }}
          ></div>
        </div>
      </Link>
      <div>
        <p className="brand-name">
          {item.brand} {item.name}
        </p>
        <p className="product-price">
          {pricing?.currency?.symbol}
          {priceAmount}
        </p>
      </div>
      {!item.inStock ? null : activeItem === item.id ?
        <QuickAddToCart
          handleAddProduct={handleAddProduct}
          item={item}
          toggleQuickCart={toggleQuickCart}
          quickAddToCartVisible={quickAddToCartVisible}
          allAttributesAreSelected={allAttributesAreSelected}
          handleSelectedAttributes={handleSelectedAttributes}
          selectedAttributes={selectedAttributes}
          removeQuickAddToCart={removeQuickAddToCart}
          alertMessageMain={alertMessageMain}
          setActiveItem={setActiveItem}
        /> :
        <img
          className="quick-buy"
          src={addToCart}
          onClick={() => setActiveItem(item.id)}
          alt="Add to cart icon"
        />}
    </div>
  );
}
export default Product;