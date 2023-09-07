import MoneyPreview from "../../assets/images/money-preview.mp4"
import React, { useState } from "react";
import "./checkout.css"


const Checkout = () => {
    const [currentStep, setCurrentStep] = useState("details");
    const [formValues, setFormValues] = useState({ firstname: "", lastname: "", email: "", phonenumber: "", streetaddress: "", country: "", postal: "", city: "", province: "", card: "", expiration: "", cvv: "" })
    const [formErrors, setFormErrors] = useState({});

    const setStep = (step, validationStep) => {
        setFormErrors(validateForm(formValues, validationStep));
        if (Object.keys(validateForm(formValues, validationStep)).length > 0) {
            return;
        }
        else {
            setCurrentStep(step);
        }
    };

    const validateForm = (values, step = "payment") => {
        const errors = {};
        if (step === "details") {
            if (!values.firstname) {
                errors.firstname = "*";
            }
            if (!values.lastname) {
                errors.lastname = "*";
            }

            if (!values.email) {
                errors.email = "*";
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.phonenumber) {
                errors.phonenumber = "*";
            }
        }
        if (step === "address") {
            if (!values.streetaddress) {
                errors.streetaddress = "*";
            }
            if (!values.country) {
                errors.country = "*";
            }
            if (!values.postal) {
                errors.postal = "*";
            }
            if (!values.city) {
                errors.city = "*";
            }
            if (!values.province) {
                errors.province = "*";
            }
        }
        if (step === "payment") {
            if (!values.card) {
                errors.card = "*";
            }
            if (!values.expiration) {
                errors.expiration = "*";
            }
            if (!values.cvv) {
                errors.cvv = "*";
            }
        }
        return errors;
    }
    const submitForm = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formValues));
        if (Object.keys(validateForm(formValues)).length > 0) {
            return;
        }
        else {
            setCurrentStep("done");
            setFormValues({ firstname: "", lastname: "", email: "", phonenumber: "", streetaddress: "", country: "", postal: "", city: "", province: "", card: "", expiration: "", cvv: "" })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    return (
        <main>
        <article className="cart-hero">
                    
                <video autoPlay loop muted playsInline>
                    <source src={MoneyPreview} type="video/mp4" />
                </video>
           
        </article>
            <article className="checkout">
                {currentStep === "done" ? null :
                    <ul>
                        <li onClick={() => setStep("detail")}><span></span></li>
                        <li onClick={() => setStep("payment")}><span></span></li>
                        <li onClick={() => setStep("detail")}> </li>
                    </ul>}

                <form onSubmit={submitForm}>
                    {currentStep === "details" ?
                        <section className="personalStyle">
                            <h2>Personal details</h2>
                            <input
                                onChange={handleChange}
                                value={formValues.firstname}
                                type="text"
                                name="firstname"
                                placeholder="Firstname"
                                className="input-style"
                            />
                            <span>{formErrors.firstname}</span>
                            <input
                                onChange={handleChange}
                                value={formValues.lastname}
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                                className="input-style"
                            />
                            <span>{formErrors.lastname}</span>
                            <input
                                onChange={handleChange}
                                value={formValues.email}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input-style" />
                            <span>{formErrors.email}</span>
                            <input
                                onChange={handleChange}
                                value={formValues.phonenumber}
                                type="text"
                                name="phonenumber"
                                placeholder="Phone number"
                                className="input-style"
                            />
                            <span>{formErrors.phonenumber}</span>
                        </section> :
                        currentStep === "address" ?
                            <section className="personalStyle">
                                <h2>Delivery information</h2>
                                <input
                                    onChange={handleChange}
                                    value={formValues.streetaddress}
                                    type="text"
                                    name="streetaddress"
                                    placeholder="Street address"
                                    className="input-style"
                                />
                                <span>{formErrors.streetaddress}</span>
                                <input
                                    onChange={handleChange}
                                    value={formValues.country}
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    className="input-style"
                                />
                                <span>{formErrors.Country}</span>
                                <input
                                    onChange={handleChange}
                                    value={formValues.postal}
                                    type="text"
                                    name="postal"
                                    placeholder="Postal" 
                                    className="input-style"
                                    />
                                <span>{formErrors.postal}</span>
                                <input
                                    onChange={handleChange}
                                    value={formValues.city}
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="input-style"
                                />
                                <span>{formErrors.city}</span>
                                <input
                                    onChange={handleChange}
                                    value={formValues.province}
                                    type="text"
                                    name="province"
                                    placeholder="Province"
                                    className="input-style"
                                />
                                <span>{formErrors.province}</span>
                            </section> :
                            currentStep === "payment" ?
                                <section className="personalStyle">
                                    <h2>Payment</h2>
                                    <input
                                        onChange={handleChange}
                                        value={formValues.card}
                                        type="text"
                                        name="card"
                                        placeholder="Card number"
                                        className="input-style"
                                    />
                                    <span>{formErrors.card}</span>
                                    <input
                                        onChange={handleChange}
                                        value={formValues.expiration}
                                        type="text"
                                        name="expiration"
                                        placeholder="MM / YY"
                                        className="input-style"
                                    />
                                    <span>{formErrors.expiration}</span>
                                    <input
                                        onChange={handleChange}
                                        value={formValues.cvv}
                                        type="cvv"
                                        name="cvv"
                                        placeholder="CVV"
                                        className="input-style" />
                                    <span>{formErrors.cvv}</span>
                                </section> :
                                currentStep === "done" ?
                                    <section>
                                        <h2>Order Received Successfully!</h2>
                                        <p>Dear {formValues.firstname} {formValues.lastname},</p>
                                        <p>Congratulations!<br />
                                            Your order has been received successfully at Shopping Time. We're thrilled that you've chosen us for your fashion needs. Your style journey is about to begin!
                                        </p>
                                        <h3> Order Details:</h3>
                                        <ul>
                                            <li>Order Number: [Order Number]</li>
                                            <li> Order Date: [Order Date]</li>
                                            <li>Shipping Address: [Shipping Address]</li>
                                            <li>Billing Address: [Billing Address]</li>
                                            <li>Payment Method: [Payment Method]</li>
                                        </ul>
                                        <h3>Items Ordered:</h3>
                                        <ul>
                                            <li>[Item 1]: [Item Name] - [Item Price]</li>
                                            <li>[Item 1]: [Item Name] - [Item Price]</li>
                                            <li>[Item 1]: [Item Name] - [Item Price]</li>
                                        </ul>
                                        <p>
                                            Delivery Information:
                                            Your items will be carefully prepared and dispatched for delivery. You will receive a confirmation email with tracking information once your order ships.
                                            <br />
                                            Stay Connected:
                                            If you have any questions or need assistance, feel free to contact our customer support team at [Customer Support Email] or [Customer Support Phone Number].
                                            <br />
                                            Thank you for choosing Shopping Time. We can't wait to see you rocking your new outfits! Your satisfaction is our top priority.
                                            <br />
                                            Happy Shopping!
                                        </p>
                                        <p>Warm regards, <br />
                                            The Shopping Time Team</p>
                                    </section> : null}

                                    <div className="main-btn-style">
                    {currentStep === "details" ?
                        <button className="conti-btn" type="button" onClick={() => { setStep("address", "details") }}>Continue to address</button>
                        :
                        currentStep === "address" ?
                            <section className="personalStyle">
                                <button className="conti-btn" type="button" onClick={() => { setCurrentStep("details") }}>Go back</button>
                                <button className="conti-btn" type="button" onClick={(e) => { e.preventDefault(); setStep("payment", "address") }}>Continue to payment</button>
                            </section> :
                            currentStep === "payment" ?
                                <section className="personalStyle">
                                    <button className="conti-btn" type="button" onClick={() => { setCurrentStep("address") }}>Go back</button>
                                    <button className="conti-btn" type="submit">Submit</button>
                                </section> :
                                null}
                                </div>
                </form>
            </article>
        </main >

    )
}

export default Checkout;