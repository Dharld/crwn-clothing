export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id)
    
    if(existingItem) {
        return cartItems.map(cartItem => 
            cartItem.id !== itemToAdd.id ? cartItem : {...cartItem, quantity: cartItem.quantity + 1}
        )
    }

    return [ ...cartItems,
            {
                ...itemToAdd,
                quantity: 1
            }]
}