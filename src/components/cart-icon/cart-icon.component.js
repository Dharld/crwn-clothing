import React from "react"
import { useDispatch } from "react-redux"
import { toggleCart } from "../../redux/cart/cartSlice"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { useSelector } from "react-redux"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"
import "./cart-icon.styles.scss"

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartItemsCount = useSelector(state => selectCartItemsCount(state))
    return(
    <div className="cart-icon" onClick = {() => dispatch(toggleCart())}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{ cartItemsCount }</span>
    </div>
)}

export default CartIcon