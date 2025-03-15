import axios from "axios";
import { getProducts } from "../Reducers/ProductsReducer";

export  const asyncgetproducts = ()=> async(dispatch,getState)=>{
  try {
    const response = await axios.get();
    // console.log(response.data);
    
   dispatch( getProducts(response.data))
  } catch (error) {
    console.error(error);
  }
}