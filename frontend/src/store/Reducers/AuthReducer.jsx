import { createSlice } from "@reduxjs/toolkit";
import Login from "../../pages/Login";

const initialState = {
    usertoken: {user: {},token: ""},
};

const slice = createSlice({
    name: "usertoken",
    initialState,
    reducers: {
        setUserToken: (state, action) => {
            console.log(action.payload);
            
            const {token, user} = action.payload ;
            state.usertoken.token = token;
            state.usertoken.user = user;
        },
    },
});

export const { setUserToken } = slice.actions;

export default slice.reducer;