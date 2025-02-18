import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./checkout.css"
import { useNavigate } from "react-router-dom";


const Checkout = ({ setOrderFormValue }) => {
    const [currentStep, setCurrentStep] = useState("details");
    const [formValues, setFormValues] = useState({ firstname: "", lastname: "", email: "", phonenumber: "", streetaddress: "", country: "", postal: "", city: "", province: "", card: "", expiration: "", cvv: "" })
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Checkout | Shopping Time";
    }, []);
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
        const numberRegex = /\d/;
        const expiration = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/;
        const cvvRegex3 = /^[0-9]{3}$/;
        const errors = {};
        if (step === "details") {
            if (!values.firstname) {
                errors.firstname = "First name is required";
            }
            else if (values.firstname.length < 3) {
                errors.firstname = "First name is invalid";
            }
            else if (numberRegex.test(values.firstname)) {
                errors.firstname = "Last name is invalid";
            }
            if (!values.lastname) {
                errors.lastname = "Last name is required";
            }
            else if (values.lastname.length < 3) {
                errors.lastname = "Last name is invalid";
            }
            else if (numberRegex.test(values.lastname)) {
                errors.lastname = "Last name is invalid";
            }

            if (!values.email) {
                errors.email = "Please enter an email";
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.phonenumber) {
                errors.phonenumber = "The phone number is required";
            }
            else if (values.phonenumber.length < 5) {
                errors.phonenumber = "The phone number is invalid";
            }
            else if (!numberRegex.test(values.phonenumber)) {
                errors.phonenumber = "The phone number is invalid";
            }
        }
        if (step === "address") {
            if (!values.streetaddress) {
                errors.streetaddress = "Enter the street address";
            }
            if (!values.country) {
                errors.country = "Please enter a country";
            }
            else if (values.country.length < 3) {
                errors.country = "Please enter a valid country";
            }
            else if (numberRegex.test(values.country)) {
                errors.country = "Please enter a valid country";
            }
            if (!values.postal) {
                errors.postal = "Please enter a postal code";
            }
            else if (values.postal.length < 3) {
                errors.postal = "Please enter a valid postal";
            }
            if (!values.city) {
                errors.city = "Please enter the city";
            }
            else if (values.city.length < 3) {
                errors.city = "Please enter a valid city";
            }
            else if (numberRegex.test(values.city)) {
                errors.city = "Please enter a valid city";
            }
            if (!values.province) {
                errors.province = "Please enter the province name";
            }
            else if (values.province.length < 3) {
                errors.province = "Please enter a valid province";
            }
            else if (numberRegex.test(values.province)) {
                errors.province = "Please enter a valid province";
            }

        }
        if (step === "payment") {
            if (!values.card) {
                errors.card = "Card number is required";
            }
            else if (values.card.length < 16) {
                errors.card = "Card number should be 16 characters";
            }
            if (!values.expiration) {
                errors.expiration = "Enter the expiration date";
            }
            else if (!expiration.test(values.expiration)) {
                errors.expiration = "Enter the valid expiration date";
            }
            if (!values.cvv) {
                errors.cvv = "CVV is required";
            }
            else if (!cvvRegex3.test(values.cvv)) {
                errors.cvv = "CVV is invalid";
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
            const today = new Date().toDateString();
            setCurrentStep("done");
            setOrderFormValue({ ...formValues, id: uuidv4(), date: today });
            setFormValues({ firstname: "", lastname: "", email: "", phonenumber: "", streetaddress: "", country: "", postal: "", city: "", province: "", card: "", expiration: "", cvv: "" })
            return navigate("/order");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    return (
        <main className="checkout">
            <h1>{currentStep === "done" ? "Thank you for ordering" : "Checkout"}</h1>
            <article className="checkout-content">
                {currentStep === "done" ? null :
                    <ul className="multi-steps">
                        <li><span className={`step-number ${currentStep === "details" ? "active" : ""}`}>1</span><span className="step-title">Personal details</span></li>
                        <li><span className={`step-number ${currentStep === "address" ? "active" : ""}`}>2</span><span className="step-title">Delivery address</span></li>
                        <li><span className={`step-number ${currentStep === "payment" ? "active" : ""}`}>3</span><span className="step-title">Payment method</span></li>
                    </ul>}

                <form onSubmit={submitForm}>
                    {currentStep === "details" ?
                        <React.Fragment>
                            <h2>Personal details</h2>
                            <section className="checkout-inputs">
                                <input
                                    onChange={handleChange}
                                    value={formValues.firstname}
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                />
                                <span className="error">{formErrors.firstname}</span>
                                <input
                                    onChange={handleChange}
                                    value={formValues.lastname}
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                />
                                <span className="error">{formErrors.lastname}</span>
                                <input
                                    onChange={handleChange}
                                    value={formValues.email}
                                    type="email"
                                    name="email"
                                    placeholder="Email" />
                                <span className="error">{formErrors.email}</span>
                                <input
                                    onChange={handleChange}
                                    value={formValues.phonenumber}
                                    type="text"
                                    name="phonenumber"
                                    placeholder="Phone number"
                                />
                                <span className="error">{formErrors.phonenumber}</span>
                            </section>
                        </React.Fragment> :
                        currentStep === "address" ?
                            <React.Fragment>
                                <h2>Delivery information</h2>
                                <section className="checkout-inputs">
                                    <input
                                        onChange={handleChange}
                                        value={formValues.streetaddress}
                                        type="text"
                                        name="streetaddress"
                                        placeholder="Street address"
                                    />
                                    <span className="error">{formErrors.streetaddress}</span>
                                    <input
                                        onChange={handleChange}
                                        value={formValues.country}
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                    />
                                    <span className="error">{formErrors.country}</span>
                                    <input
                                        onChange={handleChange}
                                        value={formValues.postal}
                                        type="text"
                                        name="postal"
                                        placeholder="Postal code" />
                                    <span className="error">{formErrors.postal}</span>
                                    <input
                                        onChange={handleChange}
                                        value={formValues.city}
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                    />
                                    <span className="error">{formErrors.city}</span>
                                    <input
                                        onChange={handleChange}
                                        value={formValues.province}
                                        type="text"
                                        name="province"
                                        placeholder="Province"
                                    />
                                    <span className="error">{formErrors.province}</span>
                                </section>
                            </React.Fragment>
                            :
                            currentStep === "payment" ?

                                <React.Fragment>
                                    <h2>Payment</h2>
                                    <section className="checkout-inputs">
                                        <input
                                            onChange={handleChange}
                                            value={formValues.card}
                                            type="text"
                                            name="card"
                                            placeholder="Card number"
                                        />
                                        <span className="error">{formErrors.card}</span>
                                        <input
                                            onChange={handleChange}
                                            value={formValues.expiration}
                                            type="text"
                                            name="expiration"
                                            placeholder="MM / YY"
                                        />
                                        <span className="error">{formErrors.expiration}</span>
                                        <input
                                            onChange={handleChange}
                                            value={formValues.cvv}
                                            type="cvv"
                                            name="cvv"
                                            placeholder="CVV" />
                                        <span className="error">{formErrors.cvv}</span>
                                    </section>
                                </React.Fragment>
                                : null}
                    {currentStep === "details" ?
                        <button className="active-add-to-cart" type="button" onClick={() => { setStep("address", "details") }}>Continue to address</button>
                        :
                        currentStep === "address" ?
                            <section className="form-buttons">
                                <button className="active-add-to-cart" type="button" onClick={(e) => { e.preventDefault(); setStep("payment", "address") }}>Continue to payment</button>
                                <button className="go-back" type="button" onClick={() => { setCurrentStep("details") }}>Go back</button>
                            </section> :
                            currentStep === "payment" ?
                                <section className="form-buttons">
                                    <button className="active-add-to-cart" type="submit">Submit</button>
                                    <button className="go-back" type="button" onClick={() => { setCurrentStep("address") }}>Go back</button>
                                </section> :
                                null}
                </form>
            </article>
        </main >

    )
}

export default Checkout;