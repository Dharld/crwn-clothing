import userReducer from "./user/userSlice"
import cartReducer from  "./cart/cartSlice"

const rootReducer = {
    user: userReducer,
    cart: cartReducer
}

export default rootReducer