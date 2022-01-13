import React from "react";
import { removeItem, addItem, removeItems } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import "./checkout-item.styles.scss"

const CheckoutItem = ({ cartItem }) => {

    const {imageUrl, name, quantity, price} = cartItem
    const dispatch = useDispatch()

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="left-arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10092;</span>
                {quantity}
                <span 
                    className="right-arrow" 
                    onMouseDown={() => dispatch(addItem(cartItem))}>&#10093;</span>
            </div>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => dispatch(removeItems(cartItem))}>&#10006;</div>
        </div>
    )
} 

export default CheckoutItem