import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hidden: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart(state, action) {
            state.hidden = !state.hidden
        }
    }
})

export const { toggleCart } = cartSlice.actions

export default cartSlice.reducer