import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";

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
        }
    }
})

export const { toggleCart,addItem } = cartSlice.actions

export default cartSlice.reducer