import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JSqsEEKt5o6TF3p7Hh7cFXiwN9GOh8uKKXAzNB4vt8UVrd9MIoyYVItWX2zptVWo1IykFFcTh99VwouOBwumXJe00QOml8rnI";

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name = "CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description= {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = "Pay Now"
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeButton