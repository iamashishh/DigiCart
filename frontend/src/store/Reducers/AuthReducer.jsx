import { createSlice } from "@reduxjs/toolkit";

const savedToken = localStorage.getItem("authToken");
const savedUser = JSON.parse(localStorage.getItem("authUser"));

const initialState = {
    usertoken: {
    user: savedUser || null, 
    token: savedToken || null  
    }
};

const userTokenSlice = createSlice({
    name: "usertoken",
    initialState,
    reducers: {
        setUserToken: (state, action) => {

            const { token, user } = action.payload || {}; // Ensure payload is handled safely

            if (token && user) {
                state.usertoken = { user, token }; 
            }
            
        },
    logout: (state) => {
        state.usertoken = { user: null, token: null };
        localStorage.removeItem("authToken");
      },
    },
});

export const { setUserToken,logout } = userTokenSlice.actions;
export default userTokenSlice.reducer;
