import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Reducers/ProductsReducer'
export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
})