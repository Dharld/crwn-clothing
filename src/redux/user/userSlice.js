import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current_user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.current_user = action.payload
        }
    }
})

export const {setCurrentUser} = userSlice.actions

export default userSlice.reducer