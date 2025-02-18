import { useEffect, useState } from "react";

export const CheckoutSingleItem = ({ singleProduct, selectedCurrency }) => {
    const [priceAmount, setPriceAmount] = useState("");
    useEffect(() => {
        const targetCurrency = singleProduct.prices.filter((price) => price.currency.symbol === selectedCurrency)[0];
        setPriceAmount(targetCurrency.amount.toFixed(2));
    }, [selectedCurrency, singleProduct.prices]);

    return (
        <li key={singleProduct.id}>{singleProduct.name} - {priceAmount}{selectedCurrency}, {singleProduct.quantity}</li>
    )
}