import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    addAddress: (state, action) => {
      state.push(action.payload);
    },
    removeAddress: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    updateAddress: (state, action) => {
      const { index, newAddress } = action.payload;
      if (state[index]) {
        state[index] = { ...state[index], ...newAddress };
      }
    },
  },
});

export const { addAddress, removeAddress, updateAddress } = addressSlice.actions;
export default addressSlice.reducer;
