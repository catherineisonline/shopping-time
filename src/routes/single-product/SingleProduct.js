import React, { useCallback, useEffect, useState } from "react";
import Attribute from "../../components/attributes/Attributes.js";
import AddToCartButton from "../../components/AddToCartButton.js";
import ProductShowcase from "./ProductShowcase.js";
import ProductTitles from "./ProductTitles.js";
import { itemsObj } from "../../data/all-products.js";
import { ResetLocation } from "../../helpers/ResetLocation.js";

const SingleProduct = ({ selectedCurrency, handleAddProduct, alertMessageMain }) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [allAttributesAreSelected, setAllAttributesAreSelected] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const [priceAmount, setPriceAmount] = useState("");

  const filterCurrency = (singleProduct, selectedCurrency) => {
    const price = singleProduct?.prices?.filter((price) => price.currency.symbol === selectedCurrency)[0];
    setPriceAmount(price?.amount?.toFixed(2));
  };

  const getProductById = useCallback((uniqueId) => {
    const targetproduct = itemsObj.filter((item) => item.id === uniqueId)[0];
    setSingleProduct(targetproduct);
    document.querySelector(".description").innerHTML =
      targetproduct.description;
    filterCurrency(targetproduct, selectedCurrency);
    if (targetproduct.attributes.length === 0) {
      setAllAttributesAreSelected(true);
    }
  }, [selectedCurrency]);

  useEffect(() => {
    getProductById(window.location.pathname.toString().substring(1));
    ResetLocation();
  }, [getProductById]);


  const handleSelectedAttributes = (attributeId, attributeValue) => {
    const newSelectedAttribute = { attributeId, attributeValue };
    const userSelectedAttributes = [...selectedAttributes];
    const existingAttributeIndex = userSelectedAttributes.findIndex(
      (attribute) => attribute.attributeId === newSelectedAttribute.attributeId
    );

    if (existingAttributeIndex !== -1) {
      userSelectedAttributes[existingAttributeIndex] = newSelectedAttribute;
    } else {
      userSelectedAttributes.push(newSelectedAttribute);
    }
    setSelectedAttributes(userSelectedAttributes);

    if (userSelectedAttributes.length === singleProduct.attributes.length) {
      setAllAttributesAreSelected(true);
    }

  };
  return (
    <main>
      <ProductTitles singleProduct={singleProduct} />
      <section className="single-product">
        <ProductShowcase singleProduct={singleProduct} />
        <section className="data">
          {singleProduct?.attributes?.map((attribute) => (
            <Attribute
              className="attribute"
              key={attribute.id}
              attribute={attribute}
              handleSelectedAttributes={handleSelectedAttributes}
              selectedAttributes={selectedAttributes}
            />
          ))}
          <section className="pricing-section">
            <h3 className="price-title"> Price:</h3>
            <div className="single-product-pricing">
              <p className="product-price">
                {selectedCurrency}
                {priceAmount}
              </p>
            </div>
          </section>
          <AddToCartButton
            className="addtocart"
            alertMessageMain={alertMessageMain}
            handleAddProduct={handleAddProduct}
            item={singleProduct}
            allAttributesAreSelected={allAttributesAreSelected}
            handleSelectedAttributes={handleSelectedAttributes}
            selectedAttributes={selectedAttributes}
          />
          <section className="description"></section>
        </section>
      </section>
    </main>
  );
}




export default SingleProduct;