import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../utils/axios";

const initialState = {
  products: [],
  selectedProduct:null
};

export const getAllProducts = createAsyncThunk("/product/allProduct",
  async ()=>{
    const response = await Axios.get("/products/all-products")

    return response.data
  }
)


export const getSingleProductData = createAsyncThunk("/product/getOne",
  async (productId)=>{
     const response = await Axios.get(`/products/${productId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });


    return response.data
  }
)

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {

    selectedProductsAddition:(state,action)=>{
      
      state.selectedProduct = action.payload.product
    },

    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers:(builders)=>{
    builders.addCase(getAllProducts.rejected,(state)=>{
      state.products = null
    }).addCase(getAllProducts.pending,(state)=>{
      state.products = null
    }).addCase(getAllProducts.fulfilled ,(state,action)=>{
      
      state.products = action.payload.allProducts 
    }).addCase(getSingleProductData.rejected,(state)=>{
      state.selectedProduct = null
    }).addCase(getSingleProductData.pending,(state)=>{
      state.selectedProduct = null
    }).addCase(getSingleProductData.fulfilled ,(state,action)=>{
      
      state.selectedProduct = action.payload.product
    })
  }
});

export default productSlice.reducer;
export const { addProduct,selectedProductsAddition } = productSlice.actions;
