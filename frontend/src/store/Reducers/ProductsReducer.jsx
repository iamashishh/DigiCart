import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name:'Product',
    initialState,   
    reducers: {
        // Reducers
    },
})


export default productSlice.reducer;