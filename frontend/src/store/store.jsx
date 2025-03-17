import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Reducers/ProductsReducer'
import cartSlice from './Reducers/CartReducer'
import AuthSlice from './Reducers/AuthReducer'

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: cartSlice,
    auth: AuthSlice
  },
})