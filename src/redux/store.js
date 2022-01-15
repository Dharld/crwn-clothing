import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import loggerMiddleware from "redux-logger"
import { persistStore } from 'redux-persist'

const middlewares = []

if(process.env.NODE_ENV !== "production") {
    middlewares.push(loggerMiddleware)
}

export default (preloadedState) => {

    let store = configureStore({
        reducer: rootReducer,
        middleware: middlewares,
        preloadedState
    })

    let persistor = persistStore(store)
    return { store, persistor }
}


