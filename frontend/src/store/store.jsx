import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Reducers/ProductsReducer'
import cartSlice from './Reducers/CartReducer'
export const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: cartSlice,
  },
})