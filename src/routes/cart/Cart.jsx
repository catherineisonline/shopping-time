import React, { useEffect } from "react";
import CartSingleItem from "./CartSingleItem.jsx";
import CartTotals from "./CartTotals.jsx";
import "./cart.css";
import CartHero from "../../assets/images/cart-hero.webp"

const Cart = ({ selectedCurrency,
    totalPayment,
    taxes,
    handleRemoveProduct,
    cartItems,
    handleAddProduct,
    selectedAttributes,
    productsQuantity, clearCart }) => {
    useEffect(() => {
        document.title = "Cart | Shopping Time";
    }, []);
    return (
        <main>
            <article className="cart-hero">
                <h2>Cart</h2>
                <img src={CartHero} alt="" aria-hidden="true" />
            </article>
            <article className="cart">
                {cartItems.length === 0 ? (
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
                            clearCart={clearCart}
                        />
                    </section>
                )}
            </article>
        </main>
    );
}

export default Cart;
