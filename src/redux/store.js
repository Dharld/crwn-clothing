import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import loggerMiddleware from "redux-logger"
import { persistStore } from 'redux-persist'

export default (preloadedState) => {

    let store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware],
        preloadedState
    })

    let persistor = persistStore(store)
    return { store, persistor }
}


