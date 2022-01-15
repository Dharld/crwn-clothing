import React from "react"

import { useSelector } from "react-redux"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { selectCartItems, selectCartItemsTotal} from "../../redux/cart/cart.selectors"
import "./checkout-page.styles.scss"

import StripeButton from "../../components/stripe-button/stribpe-button.component"

const CheckoutPage = () => {

    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartItemsTotal)

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>)
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="text-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 12/22 - CVV: 000
            </div>
            <StripeButton price={total} />
        </div>
    )
}

export default CheckoutPage