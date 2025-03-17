import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../Reducers/CartReducer";

export const asyncAddToCart = (product) => async (dispatch) => {
    try {
        dispatch(addToCart(product));
    } catch (error) {
        console.error("Error adding product:", error);
    }
}; 

export const asyncRemoveFromCart = (id) => async (dispatch) => {
    try {
        dispatch(removeFromCart({ id }));
    } catch (error) {
        console.error("Error removing product:", error);
    }
};

export const asyncIncreaseQuantity = (id) => async (dispatch) => {
    dispatch(increaseQuantity({ id }));
};

export const asyncDecreaseQuantity = (id) => async (dispatch) => {
    dispatch(decreaseQuantity({ id }));
};
