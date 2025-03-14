import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
        state.products = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { getProducts } = productSlice.actions;
