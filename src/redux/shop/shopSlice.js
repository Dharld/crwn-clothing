import { createSlice } from "@reduxjs/toolkit";
import data from "./shop-data"

const initialState = {
    collections: data
}

const shopSlice = createSlice({
    name: "shop",
    initialState
})

export default shopSlice.reducer