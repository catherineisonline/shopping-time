
import React from "react";
import "./checkout.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: "details"
        };
        this.setStep = this.setStep.bind(this);

    }
    setStep = (step) => {
        console.log(step)
        this.setState({ currentStep: step });

    };

    componentDidMount() {
        this.setStep("details");
    }
    render() {
        return (
            <main>
                <article className="checkout">
                    <ul>
                        <li>Details <span>&gt;</span></li>
                        <li>Address <span>&gt;</span></li>
                        <li>Payment</li>
                    </ul>

                    <Formik initialValues={{ firstname: "", lastname: "", email: "", phonenumber: "", streetaddress: "", country: "", postal: "", city: "", province: "", card: "", expiration: "", cvv: "" }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.firstname) {
                                errors.firstname = "Required";
                            }
                            if (!values.lastname) {
                                errors.lastname = "Required";
                            }

                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Invalid email address";
                            }

                            if (!values.phonenumber) {
                                errors.phonenumber = "Required";
                            }
                            if (!values.streetaddress) {
                                errors.streetaddress = "Required";
                            }
                            if (!values.country) {
                                errors.country = "Required";
                            }
                            if (!values.postal) {
                                errors.postal = "Required";
                            }
                            if (!values.city) {
                                errors.city = "Required";
                            }
                            if (!values.province) {
                                errors.province = "Required";
                            }
                            if (!values.card) {
                                errors.card = "Required";
                            }
                            if (!values.expiration) {
                                errors.expiration = "Required";
                            }
                            if (!values.cvv) {
                                errors.cvv = "Required";
                            }
                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                {this.state.currentStep === "details" ?
                                    <>
                                        <Field
                                            type="text"
                                            name="firstname"
                                            placeholder="Firstname"
                                        />
                                        <ErrorMessage name="firstname" component="div" />

                                        <Field
                                            type="text"
                                            name="lastname"
                                            placeholder="Lastname"
                                        />
                                        <ErrorMessage name="lastname" component="div" />

                                        <Field type="email" name="email" placeholder="Email" />
                                        <ErrorMessage name="email" component="div" />

                                        <Field
                                            type="text"
                                            name="phonenumber"
                                            placeholder="Phone number"
                                        />
                                        <ErrorMessage name="phonenumber" component="div" />
                                    </> :

                                    this.state.currentStep === "address" ?
                                        <>
                                            <Field
                                                type="text"
                                                name="streetaddress"
                                                placeholder="Street address"
                                            />
                                            <ErrorMessage name="streetaddress" component="div" />

                                            <Field
                                                type="text"
                                                name="country"
                                                placeholder="Country"
                                            />
                                            <ErrorMessage name="country" component="div" />

                                            <Field type="text" name="postal" placeholder="Postal" />
                                            <ErrorMessage name="postal" component="div" />

                                            <Field
                                                type="text"
                                                name="city"
                                                placeholder="City"
                                            />
                                            <ErrorMessage name="city" component="div" />
                                            <Field
                                                type="text"
                                                name="province"
                                                placeholder="Province"
                                            />
                                            <ErrorMessage name="province" component="div" />
                                        </> :
                                        this.state.currentStep === "payment" ?
                                            <>
                                                <Field
                                                    type="text"
                                                    name="card"
                                                    placeholder="Card number"
                                                />
                                                <ErrorMessage name="card" component="div" />

                                                <Field
                                                    type="text"
                                                    name="expiration"
                                                    placeholder="MM / YY"
                                                />
                                                <ErrorMessage name="expiration" component="div" />

                                                <Field type="cvv" name="cvv" placeholder="CVV" />
                                                <ErrorMessage name="cvv" component="div" />
                                            </>

                                            : <></>}


                                {this.state.currentStep === "details" ? <button onClick={(e) => { e.preventDefault(); this.setStep("address") }}>Continue to address</button> : this.state.currentStep === "address" ? <button onClick={(e) => { e.preventDefault(); this.setStep("payment") }}>Continue to payment</button> : this.state.currentStep === "payment" ?
                                    <button type="submit" disabled={isSubmitting}>Submit</button> : null}

                            </Form>
                        )}
                    </Formik>


                </article>
            </main >

        )
    }
}