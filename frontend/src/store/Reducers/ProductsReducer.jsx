import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      // console.log(action.payload);
        state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default productSlice.reducer;
export const { getProducts,addProduct } = productSlice.actions;
