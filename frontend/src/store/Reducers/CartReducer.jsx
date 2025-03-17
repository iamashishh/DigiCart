import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartCount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }

            state.cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0); 
        },

        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            state.cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },

        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            state.cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
