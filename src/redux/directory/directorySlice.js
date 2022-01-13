import { createSlice } from "@reduxjs/toolkit";
import data from "./directory.data"

const initialState = {
    sections: data
}
const directorySlice = createSlice({
    name: "directory",
    initialState,
})

export default directorySlice.reducer