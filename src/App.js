import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.js";
import AllProducts from "./routes/all-products/AllProducts.js";
import SingleProduct from "./routes/single-product/SingleProduct.js";
import Cart from "./routes/cart/Cart.js"
import Landing from "./routes/landing/Landing.js";
import Checkout from "./routes/checkout/Checkout";
import NotFound from "./routes/not-found/NotFound";
import Order from "./routes/order/Order";
import products_database from "./database/firebase.js"
import { collection, getDocs } from 'firebase/firestore/lite';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('$');
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const [orderFormValue, setOrderFormValue] = useState({});
  const [cachedProducts, setCachedProducts] = useState([]);
  const [cachedCurrencies, setCachedCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const GetProducts = useCallback(async (targetcategory) => {
    setIsLoading(true);
    if (cachedProducts.length === 0) {
      try {
        const products = await retrieveProducts(products_database);
        setCachedProducts(products);
        if (targetcategory === 'all') {
          setAllProducts(products);
        } else {
          const targetProducts = products.filter(item =>
            Object.values(item).includes(targetcategory)
          );
          setAllProducts(targetProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    } else {
      // Use cached products
      if (targetcategory === 'all') {
        setAllProducts(cachedProducts);
      } else {
        const targetProducts = cachedProducts.filter(item =>
          Object.values(item).includes(targetcategory)
        );
        setAllProducts(targetProducts);
      }
    }
    setIsLoading(false)
  }, [cachedProducts]);

  const retrieveProducts = async (db) => {
    const all_products_col = collection(db, 'products');
    const productsSnapshot = await getDocs(all_products_col);
    const all_products = productsSnapshot.docs.map(doc => doc.data());
    return all_products;
  }

  useEffect(() => {
  }, [activeCategory, GetProducts]);



  const clearCart = () => {
    setCartItems([]);
    setProductsQuantity(0);
    localStorage.removeItem('cartItems');
    localStorage.removeItem('productsQuantity');
  }

  const changeCategory = (newCategory) => {

    setActiveCategory(newCategory);
    GetProducts(newCategory);
    localStorage.setItem('activeCategory', JSON.stringify(newCategory));
  };

  useEffect(() => {
    const storedActiveCategory = JSON.parse(localStorage.getItem('activeCategory'));
    if (storedActiveCategory) {
      setActiveCategory(storedActiveCategory);
      GetProducts(storedActiveCategory);
    }
  }, [GetProducts]);

  useEffect(() => {
    const storedSelectedCurrency = JSON.parse(localStorage.getItem('selectedCurrency'));
    if (storedSelectedCurrency) {
      setSelectedCurrency(storedSelectedCurrency);
    }
  }, []);

  const changeCurrency = (newSelectedCurrency) => {
    setSelectedCurrency(newSelectedCurrency);
    localStorage.setItem('selectedCurrency', JSON.stringify(newSelectedCurrency));
  };

  async function getCurrencies() {
    if (cachedCurrencies.length === 0) {
      try {
        const all_currencies = await retrieveCurrencies(products_database);
        setCachedCurrencies(all_currencies);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }

    } else {
      // Use cached currencies
      setAllCurrencies(cachedCurrencies);
    }
  }

  async function retrieveCurrencies(db) {
    try {
      const all_currencies_col = collection(db, 'currencies');
      const currenciesSnapshot = await getDocs(all_currencies_col);
      const all_currencies = currenciesSnapshot.docs.map(doc => doc.data());
      return all_currencies;
    } catch (error) {
      console.error('Error retrieving currencies from Firebase:', error);
      return [];
    }
  }

  useEffect(() => {
    getCurrencies();
  }, []);

  const MatchingAttributes = (userSelectedAttributes, targetProduct) => {
    const attributesMatch = (groupOne, groupTwo) => {
      return Object.values(groupOne)[1] === Object.values(groupTwo)[1];
    };

    let truthyValuesCounter = 0;
    let i = 0;
    while (i < userSelectedAttributes.length) {
      if (
        attributesMatch(
          userSelectedAttributes[i],
          targetProduct?.userSelectedAttributes[i]
        )
      ) {
        truthyValuesCounter += 1;
      }
      i += 1;
    }

    return truthyValuesCounter === userSelectedAttributes?.length;
  };
  const updateCartQuantity = (actionToPerfrom, productAlreadyInCart, userSelectedAttributes) => {
    const repeatableProduct = CheckRepeatableProducts(
      cartItems,
      productAlreadyInCart,
      userSelectedAttributes
    );
    const indexOfRepeatableProduct = cartItems.indexOf(repeatableProduct);
    const currentProductList = [...cartItems];
    if (actionToPerfrom === 'addProduct') {
      currentProductList[indexOfRepeatableProduct].quantity += 1;
    } else {
      currentProductList[indexOfRepeatableProduct].quantity -= 1;
    }

    return currentProductList;
  };
  const CheckRepeatableProducts = (cartItems, targetProduct, userSelectedAttributes) => {
    let item;
    const productsById = cartItems.filter(
      (item) => item.id === targetProduct.id
    );
    productsById.forEach((targetProduct) => {
      if (MatchingAttributes(userSelectedAttributes, targetProduct)) {
        item = targetProduct;
      }
    });
    return item;
  };


  const handleAddProduct = (targetProduct, userSelectedAttributes = null) => {
    let updatedProductList;
    const productAlreadyInCart = CheckRepeatableProducts(
      cartItems,
      targetProduct,
      userSelectedAttributes
    );

    if (productAlreadyInCart) {
      updatedProductList = updateCartQuantity(
        'addProduct',
        productAlreadyInCart,
        userSelectedAttributes
      );
    } else {
      let modifiedProduct = JSON.parse(JSON.stringify(targetProduct));
      let clone;

      for (let i = 0; i < targetProduct?.attributes?.length; i++) {
        for (let j = 0; j < targetProduct?.attributes[i]?.items?.length; j++) {
          if (
            targetProduct.attributes[i].items[j].value ===
            userSelectedAttributes[i].value
          ) {
            clone = {
              ...targetProduct.attributes[i].items[j],
            };
            clone.isSelected = true;

            modifiedProduct.attributes[i].items[j].isSelected = true;

            modifiedProduct.attributes[i].items[j] = {
              ...clone,
            };
          }
        }
      }
      updatedProductList = [
        ...cartItems,
        {
          ...modifiedProduct,
          userSelectedAttributes,
          quantity: 1,
        },
      ];
    }

    // Create unique id
    updatedProductList.map((updatedProduct) => {
      const firstValue = Object.values(
        updatedProduct.userSelectedAttributes[0] || []
      );
      const secondValue = Object.values(
        updatedProduct.userSelectedAttributes[1] || []
      );
      const thirdValue = Object.values(
        updatedProduct.userSelectedAttributes[2] || []
      );

      const productId = updatedProduct.id;
      return (updatedProduct.uniqueId = `${productId}-${firstValue}-${secondValue}-${thirdValue}`);
    });
    // Update cart items
    setCartItems(updatedProductList);
    localStorage.setItem('cartItems', JSON.stringify(updatedProductList));

    // Update cart quantity
    if (updatedProductList.length <= 1) {
      updatedProductList.forEach((item) => {
        localStorage.setItem('productsQuantity', JSON.stringify(item.quantity));
        setProductsQuantity(item.quantity);
      });
    } else {
      const productListArray = updatedProductList.map((item) => item.quantity);
      const sum = productListArray.reduce((a, b) => a + b, 0);
      setProductsQuantity(sum);
      localStorage.setItem('productsQuantity', JSON.stringify(sum));
    }
  };
  useEffect(() => {
    if (localStorage.getItem('cartItems') !== null) {
      const jsonCartItems = localStorage.getItem('cartItems');
      const cartItems = JSON.parse(jsonCartItems);
      setCartItems(cartItems);
    } if (localStorage.getItem('productsQuantity') !== null) {
      const jsonProductsQuantity = localStorage.getItem('productsQuantity');
      const productsQuantity = JSON.parse(jsonProductsQuantity);
      setProductsQuantity(productsQuantity);
    }
  }, [])


  const alertMessageMain = () => {
    const alertMessage = document.querySelector('.success-alert');
    alertMessage.classList.add('visible');
    setTimeout(() => {
      alertMessage.classList.remove('visible');
    }, 1000);
  };
  const handleRemoveProduct = (targetProduct, userSelectedAttributes) => {
    let updatedProductList;
    const repeatableProduct = CheckRepeatableProducts(
      cartItems,
      targetProduct,
      userSelectedAttributes
    );
    if (repeatableProduct.quantity > 1) {
      updatedProductList = updateCartQuantity(
        'removeProduct',
        repeatableProduct,
        userSelectedAttributes
      );
    } else {
      const products = [...cartItems];
      const indexOfProduct = products.indexOf(repeatableProduct);
      products.splice(indexOfProduct, 1);
      updatedProductList = products;
    }

    // Update cart items
    setCartItems(updatedProductList);
    localStorage.setItem('cartItems', JSON.stringify(updatedProductList));

    // Update cart quantity
    if (updatedProductList.length <= 1) {
      updatedProductList.forEach((item) => {
        localStorage.setItem('productsQuantity', JSON.stringify(item.quantity));
        setProductsQuantity(item.quantity);
      });
    } else {
      const productListArray = updatedProductList.map((item) => item.quantity);
      const sum = productListArray.reduce((a, b) => a + b);
      setProductsQuantity(sum);
      localStorage.setItem('productsQuantity', JSON.stringify(sum));
    }
    if (updatedProductList.length === 0) {
      setProductsQuantity(0);
      localStorage.setItem('productsQuantity', JSON.stringify(0));
    }
  };
  const getPrice = (prices, currency) => {
    return prices.filter((price) => price.currency.symbol === currency)[0];
  };


  // get total price of cart items
  const getTotalPrice = useCallback(
    (selectedCurrency, cartItems) => {
      let totalPayment = 0;
      for (const item of cartItems) {
        const correctPrice = getPrice(item.prices, selectedCurrency);

        totalPayment = totalPayment + correctPrice.amount * item.quantity;
      }

      totalPayment = parseFloat(totalPayment.toFixed(2));

      setTotalPayment(totalPayment);
      setTaxes(((totalPayment * 21) / 100).toFixed(2));
    }, [setTotalPayment, setTaxes]);

  useEffect(() => {
    getTotalPrice(selectedCurrency, cartItems);
  }, [cartItems, selectedCurrency, getTotalPrice]);







  return (
    <BrowserRouter>
      <Header
        productsQuantity={productsQuantity}
        activeCategory={activeCategory}
        selectedCurrency={selectedCurrency}
        allCurrencies={allCurrencies}
        changeCategory={changeCategory}
        changeCurrency={changeCurrency}
        totalPayment={totalPayment}
        cartItems={cartItems}
        handleRemoveProduct={handleRemoveProduct}
        handleAddProduct={handleAddProduct}
        clearCart={clearCart}
      />

      <Routes>
        <Route
          path="/"
          element={<Landing changeCategory={changeCategory} />}
        />
        <Route
          path={`/store/${activeCategory}`}
          element={
            <AllProducts
              allProducts={allProducts}
              activeCategory={activeCategory}
              selectedCurrency={selectedCurrency}
              handleAddProduct={handleAddProduct}
              alertMessageMain={alertMessageMain}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path={`/store/:id`}
          element={
            <SingleProduct
              selectedCurrency={selectedCurrency}
              handleAddProduct={handleAddProduct}
              alertMessageMain={alertMessageMain}
              allProducts={allProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              productsQuantity={productsQuantity}
              cartItems={cartItems}
              selectedCurrency={selectedCurrency}
              totalPayment={totalPayment}
              taxes={taxes}
              handleRemoveProduct={handleRemoveProduct}
              handleAddProduct={handleAddProduct}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/checkout" element={cartItems.length > 0 ? <Checkout cartItems={cartItems} selectedCurrency={selectedCurrency} setOrderFormValue={setOrderFormValue} /> :
          <NotFound />} />
        <Route path="/order" element={cartItems.length > 0 && Object.keys(orderFormValue).length > 0 ? <Order cartItems={cartItems} selectedCurrency={selectedCurrency} orderFormValue={orderFormValue} clearCart={clearCart} /> :
          <NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;