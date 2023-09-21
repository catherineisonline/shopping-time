import { useEffect, useState } from "react";
import { CheckoutSingleItem } from "../checkout/CheckoutSingleItem";
import "./order.css";
import { useNavigate } from "react-router-dom";
import { ResetLocation } from "../../helpers/ResetLocation";


const Order = ({ orderFormValue, cartItems, selectedCurrency, clearCart }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Order summary | Shopping Time";
    }, []);

    const handlePrint = () => {
        window.print();
    };

    const handleContinueShopping = () => {
        setShowConfirmation(false);
        clearCart();
        navigate("/");
        ResetLocation();
    };

    const handleLeavePage = () => {
        setShowConfirmation(true);
    };

    const handleCancelLeavePage = () => {
        setShowConfirmation(false);
    };


    return (
        <main className="order">
            <h2>Order summary</h2>
            <section className="order-success">
                <p>Dear {orderFormValue.firstname} {orderFormValue.lastname},</p>
                <p>
                    Your order has been received successfully at Shopping Time. We're thrilled that you've chosen us for your fashion needs. Your style journey is about to begin!
                </p>
                <h3> Order Details:</h3>
                <ul className="order-details">
                    <li>Order Number: {orderFormValue.id}</li>
                    <li> Order Date: {orderFormValue.date}</li>
                    <li>Shipping Address: {orderFormValue.country}, {orderFormValue.city}, {orderFormValue.postal}, {orderFormValue.address}</li>
                    <li>Payment Method: Bank card</li>
                </ul>
                <h3>Items Ordered:</h3>
                <ul className="items-ordered">
                    {cartItems.map((singleProduct) => {
                        return (
                            <CheckoutSingleItem
                                key={singleProduct.uniqueId}
                                singleProduct={singleProduct}
                                selectedCurrency={selectedCurrency}
                            />
                        );
                    })}
                </ul>
                <h3>Delivery Information:</h3>
                <p>

                    Your items will be carefully prepared and dispatched for delivery. You will receive a confirmation email with tracking information once your order ships.
                </p>
                <h3>    Stay Connected:</h3>
                If you have any questions or need assistance, feel free to contact our customer support team at support@shoppingtime.com or +1 1234 344 2342.
                <br />
                <p>  Happy Shopping!
                </p>
                <p>Warm regards, <br />
                    The Shopping Time Team</p>
            </section>
            <section className="order-buttons">
                <button className="print" onClick={handlePrint} >Print</button>
                <button className="exit-order" onClick={handleLeavePage}>Continue shopping</button>
            </section>
            {showConfirmation && (
                <section className="confirmation-dialog">
                    <section className="confirmation-dialog-inner">
                        <h3>Are you sure you want to leave this page?</h3>
                        <section className="buttons">
                            <button onClick={handleContinueShopping}>Continue shopping</button>
                            <button onClick={handleCancelLeavePage}>Cancel</button>
                        </section>
                    </section>
                </section>
            )}
        </main>
    )
}


export default Order;