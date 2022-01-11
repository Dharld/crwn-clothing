import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
import loggerMiddleware from "redux-logger"

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware],
        preloadedState
    })

    return store
}