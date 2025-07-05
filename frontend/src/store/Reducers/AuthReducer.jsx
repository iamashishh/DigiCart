import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../utils/axios";

// const savedToken = localStorage.getItem("authToken");
// const savedUser = JSON.parse(localStorage.getItem("authUser"));

// const initialState = {
//     usertoken: {
//     user: savedUser || null, 
//     token: savedToken || null  
//     }
// };

const initialState = {
    user: null,
    token:null,
    isAuthenticated:false,
    isloading:true
}

export const loginUser = createAsyncThunk("/auth/login",
    async (formData)=>{
        const response = await Axios.post("/auth/login",formData,{
            withCredentials:true
        })

        return response.data
         }
) 

export const registerUser = createAsyncThunk("/auth/register",
    async (formData)=>{
        const response = await Axios.post("/auth/register",formData,{
            withCredentials:true
        })

        return response.data
         }
) 

export const checkAuth = createAsyncThunk("/auth/cehckAuth",
    async ()=>{
        const response = await Axios.get("/auth/check-auth",{
            withCredentials:true,
            headers:
                {
            "Cache-Control":"no-store,no-cache,must-revalidate,proxy-revalidate"
        }
        })

        return response.data
         }
) 




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
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.isloading = true;
        }).addCase(loginUser.rejected,(state)=>{
            state.isloading = false,
            state.isAuthenticated = false,
            state.user = null
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isloading = false,
            state.isAuthenticated = true,
            state.user = action.payload.success ? action.payload.user : null;
            state.token =  action.payload.success ? action.payload.token : null

        }).addCase(registerUser.pending,(state)=>{
            state.isloading = true;
        }).addCase(registerUser.rejected,(state)=>{
            state.isloading = false,
            state.isAuthenticated = false,
            state.user = null
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isloading = false,
            state.isAuthenticated = true,
            state.user = action.payload.success ? action.payload.user : null;
            state.token =  action.payload.success ? action.payload.token : null

        }).addCase(checkAuth.pending,(state)=>{
            state.isloading= true;
        }).addCase(checkAuth.fulfilled,(state,action)=>{
            state.isloading=false,
            state.isAuthenticated= action.payload.success ? true: false,
            state.user = action.payload.success ? action.payload.user : null;
            state.token = action.payload.success ? action.payload.token : null;
            
        }).addCase(checkAuth.rejected,(state)=>{
            state.isloading=false,
            state.isAuthenticated=false,
            state.user = null
        })
    }
});

export const { setUserToken,logout } = userTokenSlice.actions;
export default userTokenSlice.reducer;
