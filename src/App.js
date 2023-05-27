import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  currenciesObj, itemsObj, categoriesObj
} from "./prodcuts-data";
import Header from "./components/header/Header.js";
import AllProducts from "./routes/all-products/AllProducts.js";
import SingleProduct from "./routes/single-product/SingleProduct.js";
import Cart from "./routes/cart/Cart.js"
import Landing from "./routes/landing/Landing.js";
import Checkout from "./routes/checkout/Checkout";



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
      activeCategory: "",
      allCurrencies: [],
      selectedCurrency: "$",
      allProducts: [],
      cartItems: [],
      totalPayment: 0,
      taxes: 0,
      productsQuantity: 0,
      timer: "",
    };

    this.changeCurrency = this.changeCurrency.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.CheckRepeatableProducts = this.CheckRepeatableProducts.bind(this);
  }

  changeCategory = (newCategory) => {
    this.setState({ activeCategory: newCategory });
    this.GetProducts(newCategory);
    localStorage.setItem("activeCategory", JSON.stringify(newCategory));
  };

  changeCurrency(newSelectedCurrency) {
    this.setState({
      selectedCurrency: newSelectedCurrency,
    });
    localStorage.setItem(
      "selectedCurrency",
      JSON.stringify(newSelectedCurrency)
    );
  }



  /// ! SAVE FOR LATER
  getCategories = async () => {
    this.setState({ allCategories: categoriesObj });
  };

  GetProducts = async (targetcategory) => {
    let targetProducts = [];
    itemsObj.map(item => {
      Object.entries(item).map(target => {
        if (target[1] === targetcategory) {
          targetProducts.push(item);
          this.setState({ allProducts: targetProducts });
        }
        if (targetcategory === 'all') {
          this.setState({ allProducts: itemsObj });
        }
      })

    })
  };

  getCurrencies = async () => {
    this.setState({ allCurrencies: currenciesObj });
  };

  MatchingAttributes = (userSelectedAttributes, targetProduct) => {
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

    if (truthyValuesCounter === userSelectedAttributes?.length) {
      return true;
    }
  };
  CheckRepeatableProducts = (
    cartItems,
    targetProduct,
    userSelectedAttributes
  ) => {
    let item;
    const productsById = cartItems.filter(
      (item) => item.id === targetProduct.id
    );
    productsById.forEach((targetProduct) => {
      if (this.MatchingAttributes(userSelectedAttributes, targetProduct)) {
        item = targetProduct;
      }
    });
    return item;
  };

  updateCartQuantity(
    actionToPerfrom,
    productAlreadyInCart,
    userSelectedAttributes
  ) {
    const repeatableProduct = this.CheckRepeatableProducts(
      this.state.cartItems,
      productAlreadyInCart,
      userSelectedAttributes
    );
    const indexOfRepeatableProduct =
      this.state.cartItems.indexOf(repeatableProduct);
    const currentProductList = [...this.state.cartItems];
    if (actionToPerfrom === "addProduct") {
      currentProductList[indexOfRepeatableProduct].quantity += 1;
    } else {
      currentProductList[indexOfRepeatableProduct].quantity -= 1;
    }

    return currentProductList;
  }

  handleAddProduct = (targetProduct, userSelectedAttributes) => {
    let updatedProductList;
    const productAlreadyInCart = this.CheckRepeatableProducts(
      this.state.cartItems,
      targetProduct,
      userSelectedAttributes
    );

    if (productAlreadyInCart) {
      updatedProductList = this.updateCartQuantity(
        "addProduct",
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
        ...this.state.cartItems,
        {
          ...modifiedProduct,
          userSelectedAttributes,
          quantity: 1,
        },
      ];
    }
    //create unique id
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
      return (updatedProduct.uniqueId = `${productId}-${firstValue}-${secondValue}-${thirdValue}}`);
    });

    this.setState({ cartItems: updatedProductList });
    localStorage.setItem("cartItems", JSON.stringify(updatedProductList));
    if (updatedProductList.length <= 1) {
      updatedProductList.map((item) => {
        localStorage.setItem("productsQuantity", JSON.stringify(item.quantity));
        return this.setState({ productsQuantity: item.quantity });
      });
    } else {
      const productListArray = updatedProductList.map((item) => item.quantity);
      const sum = productListArray.reduce((a, b) => a + b, 0);
      this.setState({ productsQuantity: sum });
      localStorage.setItem("productsQuantity", JSON.stringify(sum));
    }
  };

  alertMessageMain() {
    const alertMessage = document.querySelector(".success-alert");
    alertMessage.classList.add("visible");
    setTimeout(() => {
      alertMessage.classList.remove("visible");
    }, 1000);
  }
  handleRemoveProduct = (targetProduct, userSelectedAttributes) => {
    let updatedProductList;
    const repeatableProduct = this.CheckRepeatableProducts(
      this.state.cartItems,
      targetProduct,
      userSelectedAttributes
    );
    if (repeatableProduct.quantity > 1) {
      updatedProductList = this.updateCartQuantity(
        "removeProduct",
        repeatableProduct,
        userSelectedAttributes
      );
    } else {
      const products = [...this.state.cartItems];
      const indexOfProduct = products.indexOf(repeatableProduct);
      products.splice(indexOfProduct, 1);
      updatedProductList = products;
    }
    this.setState({ cartItems: updatedProductList });
    localStorage.setItem("cartItems", JSON.stringify(updatedProductList));
    if (updatedProductList.length <= 1) {
      updatedProductList.map((item) => {
        localStorage.setItem("productsQuantity", JSON.stringify(item.quantity));

        return this.setState({ productsQuantity: item.quantity });
      });
    } else {
      const productListArray = updatedProductList.map((item) => item.quantity);
      const sum = productListArray.reduce((a, b) => a + b);
      this.setState({ productsQuantity: sum });
      localStorage.setItem("productsQuantity", JSON.stringify(sum));
    }
    if (updatedProductList.length === 0) {
      this.setState({ productsQuantity: 0 });
      localStorage.setItem("productsQuantity", JSON.stringify(0));
    }
  };

  getPrice(prices, currency) {
    const [correctPrice] = prices.filter(
      (price) => price.currency.symbol === currency
    );

    return correctPrice;
  }

  getTotalPrice(selectedCurrency, cartItems) {
    let totalPayment = 0;

    for (const item of cartItems) {
      const correctPrice = this.getPrice(item.prices, selectedCurrency);

      totalPayment = totalPayment + correctPrice.amount * item.quantity;
    }

    totalPayment = parseFloat(totalPayment.toFixed(2));

    this.setState({ totalPayment: totalPayment });
    this.setState({ taxes: ((totalPayment * 21) / 100).toFixed(2) });
  }
  componentDidMount() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    this.getCategories();
    this.GetProducts(this.state.activeCategory);
    this.getCurrencies();

  }

  shouldComponentUpdate(nextProps, nextState) {
    const { cartItems, selectedCurrency } = this.state;
    if (
      cartItems !== nextState.cartItems ||
      selectedCurrency !== nextState.selectedCurrency
    ) {
      this.getTotalPrice(nextState.selectedCurrency, nextState.cartItems);
    }

    return true;
  }
  render() {
    const {
      productsQuantity,
      allCategories,
      activeCategory,
      selectedCurrency,
      allCurrencies,
      totalPayment,
      cartItems,
      allProducts,
      productId,
      cartQuantity,
      selectedAttributes,
      taxes,
      cart,
    } = this.state;
    return (
      <BrowserRouter>
        <Header
          productsQuantity={productsQuantity}
          allCategories={allCategories}
          activeCategory={activeCategory}
          selectedCurrency={selectedCurrency}
          allCurrencies={allCurrencies}
          changeCategory={this.changeCategory}
          changeCurrency={this.changeCurrency}
          totalPayment={totalPayment}
          cartItems={cartItems}
          handleRemoveProduct={this.handleRemoveProduct}
          handleAddProduct={this.handleAddProduct}
        />

        <Routes>
          <Route
            path="/"
            element={<Landing changeCategory={this.changeCategory} />}
          />
          <Route
            path={`/store/${activeCategory}`}
            element={
              <AllProducts
                allProducts={allProducts}
                activeCategory={activeCategory}
                selectedCurrency={selectedCurrency}
                cart={cart}
                handleAddProduct={this.handleAddProduct}
                alertMessageMain={this.alertMessageMain}
                toggleQuickAddToCart={this.toggleQuickAddToCart}
              />
            }
          />
          <Route
            path={`/:id`}
            element={
              <SingleProduct
                productId={productId}
                selectedCurrency={selectedCurrency}
                handleAddProduct={this.handleAddProduct}
                alertMessageMain={this.alertMessageMain}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                productsQuantity={productsQuantity}
                cartQuantity={cartQuantity}
                cartItems={cartItems}
                selectedCurrency={selectedCurrency}
                selectedAttributes={selectedAttributes}
                totalPayment={totalPayment}
                taxes={taxes}
                handleRemoveProduct={this.handleRemoveProduct}
                handleAddProduct={this.handleAddProduct}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

