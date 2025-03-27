import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usertoken: {
        user: null,  // Change {} to null (optional for better handling)
        token: null  // Change "" to null (optional for better handling)
    }
};

const userTokenSlice = createSlice({
    name: "usertoken",
    initialState,
    reducers: {
        setUserToken: (state, action) => {
            console.log("Payload:", action.payload);

            const { token, user } = action.payload || {}; // Ensure payload is handled safely

            if (token && user) {
                state.usertoken = { user, token }; // Update entire object instead of modifying keys separately
            } else {
                state.usertoken = { user: null, token: null }; // Reset state if data is invalid
            }
        },
    },
});

export const { setUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
