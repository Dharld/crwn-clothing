import userReducer from "./user/userSlice"
import cartReducer from  "./cart/cartSlice"
import directoryReducer from "./directory/directorySlice"
import shopReducer from "./shop/shopSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const cartPersistConfig = {
    key: "cart",
    storage
}

const rootReducer = {
    user: userReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    directory: directoryReducer,
    shop: shopReducer
}

export default rootReducer