import axios from "axios";
import { getProducts } from "../Reducers/ProductsReducer";

export  const asyncgetproducts = ()=> async(dispatch,getState)=>{
  try {
    const options = {
      method: 'GET',
      url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
      params: {
        category_id: '2478868012',
        page: '1',
        country: 'US',
        sort_by: 'RELEVANCE',
        product_condition: 'ALL',
        is_prime: 'false',
        deals_and_discounts: 'NONE'
      },
      headers: {
        'x-rapidapi-key': '6bd1ca65c5msh3f0fea30cb3a734p18254bjsn90ed9925789d',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      dispatch( getProducts(response.data))
    } catch (error) {
      console.error(error);
    }
    
  } catch (error) {
    console.error(error);
  }
}