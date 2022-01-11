import React from "react"
import { useDispatch } from "react-redux"
import { toggleCart } from "../../redux/cart/cartSlice"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"

const CartIcon = () => {
    const dispatch = useDispatch()
    return(
    <div className="cart-icon" onClick = {() => dispatch(toggleCart())}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)}

export default CartIcon