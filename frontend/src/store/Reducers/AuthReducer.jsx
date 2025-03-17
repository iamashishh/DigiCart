import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usertoken: {user: {},token: ""},
};

const slice = createSlice({
    name: "usertoken",
    initialState,
    reducers: {
        setUserToken: (state, action) => {
            const {token, user} = action.payload ;
            state.usertoken.token = token;
            state.usertoken.user = user;
        },
    },
});

export const { setUserToken } = slice.actions;

