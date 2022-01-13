import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
    hidden: true,
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart(state, action) {
            state.hidden = !state.hidden
        },
        addItem(state, action) {
            state.cartItems = addItemToCart(state.cartItems, action.payload)
        },
        removeItem(state, action) {
            state.cartItems = removeItemFromCart(state.cartItems, action.payload)
        },
        removeItems(state, action) {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
    }
})

export const { toggleCart,addItem, removeItem, removeItems } = cartSlice.actions

export default cartSlice.reducer