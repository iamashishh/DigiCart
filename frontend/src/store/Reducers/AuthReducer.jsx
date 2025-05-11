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
            // console.log("Payload:", action.payload);

            const { token, user } = action.payload || {}; // Ensure payload is handled safely

            if (token && user) {
                state.usertoken = { user, token }; 
                localStorage.setItem("authToken", token);
                // localStorage.setItem("authUser", JSON.stringify(user));
            } else {
                state.usertoken = { user: null, token: null };
                localStorage.removeItem("authToken");
                localStorage.removeItem("authUser");
            }
            
        },
    logout: (state) => {
        state.usertoken = { user: null, token: null };
  
        // Clear localStorage on logout
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
      },
    },
});

export const { setUserToken,logout } = userTokenSlice.actions;
export default userTokenSlice.reducer;
