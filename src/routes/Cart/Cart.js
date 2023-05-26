import React from "react";
import CartSingleItem from "./CartSingleItem.js";
import CartTotals from "./CartTotals.js";
import "./cart.css";

export default class Cart extends React.Component {
    render() {
        const {
            selectedCurrency,
            totalPayment,
            taxes,
            handleRemoveProduct,
            cartItems,
            handleAddProduct,
            selectedAttributes,
            productsQuantity,
        } = this.props;

        return (
            <main className="cart-main">
                <article className="cart-hero">
                    <h2>Cart</h2>
                </article>
                <article className="cart">
                    {productsQuantity === 0 ? (
                        <section className="cart-item-section">
                            <p className="empty-cart">
                                Looks like you haven't added anything to your cart yet.
                            </p>
                        </section>
                    ) : (
                        <section className="cart-item-section">
                            {cartItems.map((singleProduct) => {
                                return (
                                    <CartSingleItem
                                        selectedAttributes={selectedAttributes}
                                        handleAddProduct={handleAddProduct}
                                        key={singleProduct.uniqueId}
                                        singleProduct={singleProduct}
                                        selectedCurrency={selectedCurrency}
                                        handleRemoveProduct={handleRemoveProduct}
                                    />
                                );
                            })}

                            <CartTotals
                                selectedCurrency={selectedCurrency}
                                totalPayment={totalPayment}
                                productsQuantity={productsQuantity}
                                taxes={taxes}
                            />
                        </section>
                    )}
                </article>
            </main>
        );
    }
}
