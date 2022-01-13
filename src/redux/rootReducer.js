import userReducer from "./user/userSlice"
import cartReducer from  "./cart/cartSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const cartPersistConfig = {
    key: "cart",
    storage
}

const rootReducer = {
    user: userReducer,
    cart: persistReducer(cartPersistConfig, cartReducer)
}

export default rootReducer