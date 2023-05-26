import React from "react";
import SelectedAttributes from "../../components/attributes/SelectedAttributes.js";
import SimpleImageSlider from "react-simple-image-slider";
import CartProductInteraction from "../../components/CartProductInteraction.js";


export default class CartSingleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pricing: "",
            pricingCurrencySymbol: "",
            pricingAmount: "",
            priceAmount: "",
        };
        this.filterCurrency = this.filterCurrency.bind(this);
    }
    // IDENTIFY PRICING
    /*******************************************************************/
    GetPricing = () => {
        this.setState({
            pricing: this.getPrice(
                this.props.singleProduct.prices,
                this.props.selectedCurrency
            ),
        });
    };
    // HANDLE CURRENCY
    /*********************************************************************/
    filterCurrency = (item, selectedCurrency) => {
        const [correctPrice] = item?.prices?.filter((price) => {
            return price.currency.symbol === selectedCurrency;
        });
        this.setState({ priceAmount: correctPrice.amount.toFixed(2) });

        this.setState({ pricing: correctPrice });
    };

    getPrice = (prices, currency) => {
        const [correctPrice] = prices.filter(
            (price) => price.currency.symbol === currency
        );
        this.setState({ priceAmount: correctPrice.amount.toFixed(2) });

        return correctPrice;
    };
    // RENDER & UPDATE
    /*********************************************************************/
    componentDidMount() {
        this.GetPricing();
        this.setState({
            pricingCurrencySymbol: this.state.pricing?.currency?.symbol,
        });
        this.setState({ pricingCurrencySymbol: this.state.pricing?.amount });
    }
    shouldComponentUpdate(nextProps) {
        if (this.props.selectedCurrency !== nextProps.selectedCurrency) {
            this.filterCurrency(this.props.singleProduct, nextProps.selectedCurrency);
        }

        return true;
    }
    render() {
        const { singleProduct, handleRemoveProduct, handleAddProduct } = this.props;
        const { pricing, priceAmount } = this.state;

        return (
            <section className="cart-products-single">
                <section className="cart-data">
                    <h2 className="product-brand">{singleProduct.brand}</h2>
                    <h2 className="product-name">{singleProduct.name}</h2>

                    <div className="cart-item-pricing">
                        <p className="product-price">
                            {pricing?.currency?.symbol}
                            {priceAmount}
                        </p>
                    </div>
                    {singleProduct?.attributes?.map((attribute) => (
                        <SelectedAttributes
                            className="cart-attr"
                            key={attribute.id}
                            attribute={attribute}
                            userSelectedAttributes={singleProduct.userSelectedAttributes}
                            singleProduct={singleProduct}
                        />
                    ))}
                </section>
                <section className="cart-content">
                    <CartProductInteraction
                        className="cart-product-interaction"
                        handleAddProduct={handleAddProduct}
                        handleRemoveProduct={handleRemoveProduct}
                        singleProduct={singleProduct}
                    />
                    {singleProduct.gallery.length === 1 ? (
                        <SimpleImageSlider
                            className="image-slider"
                            images={singleProduct.gallery}
                            showNavs={false}
                            width={290}
                            height={288}
                        />
                    ) : (
                        <SimpleImageSlider
                            className="image-slider"
                            images={singleProduct.gallery}
                            showNavs={true}
                            width={200}
                            height={200}
                            navSize={10}
                            navStyle={2}
                            bgColor="#FFFF"
                        />
                    )}
                </section>
            </section>
        );
    }
}
