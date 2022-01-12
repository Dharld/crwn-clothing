import React from "react"

import "./cart-dropdown.styles.scss"

import CustomButton from "../custom-button/custom-button.component"

import CartItem from "../cart-item/cart-item.component"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selectors"

import { useHistory } from "react-router"

const CartDropdown = () => {
    const cartItems = useSelector(state => selectCartItems(state))
    const history = useHistory()

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems
                        .map(cartItem => (<CartItem key = {cartItem.id} item = {cartItem} />))
                    :
                    (<span style = {{
                        margin: "50px auto",
                        fontSize: "18px"
                    }}>Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick = {() => {
                history.push("/checkout")
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown