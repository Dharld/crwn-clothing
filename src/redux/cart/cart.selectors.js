import { createSelector } from "@reduxjs/toolkit";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    }, 0)
)

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)