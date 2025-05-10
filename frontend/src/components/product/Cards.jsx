import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../utils/axios";
import { getProducts } from "../../store/Reducers/ProductsReducer";

const Cards = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products) || { products: [] };

  const auth = useSelector((state) => state.auth);

  
  useEffect(() => {

    const getAllProducts = async () => {
      try {
        const response = await Axios("/products/all-products",{
          headers:{
            Authorization: `Bearer ${auth?.usertoken?.token}`
          }
        });
        if(response.status === 200) {
          console.log(response.data);
          
              dispatch(getProducts(response.data.allProducts))
        }
        } catch (error) {
        console.error("Error fetching products:", error);
      }
      
    }

    getAllProducts();

  }, [])
  
  


  return (
    <div className="flex  flex-wrap   py-5 w-full h-full  ">
      <h1 className="text-3xl font-bold text-[#242424FF] mb-10">Products</h1>
      <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-3  lg:grid-cols-5 justify-center overflow-hidden px-[-4vw]">
  {products.length > 0 ? (
    products.map((p) => (
      <Link
        key={p._id}
        to={`/details/${p._id}`}
        className="flex flex-col pb-4 gap-1  items-center rounded bg-blac "
      >
        <div className="w-[80%] max-sm:w-[90%]  h-[70%] p-4 mb-2 flex items-center justify-center bg-[#F6F6F6] rounded-md ">
          <img
            className="w-[50%] object-cover mix-blend-multiply"
            src={ p.displayImage?.url || "https://via.placeholder.com/150"} 
            alt={p.title || "Product Image"}
          />
        </div>

        <div className="flex flex-col gap-1 max-sm:px-3 items-start w-full px-3 max-md:px-9  md:px-7 lg:px-9">
          <div className="flex items-center gap-2 justify-between w-full">
            <p className="text-3 font-bold truncate">{p.name}</p>
            <p className="font-bold text-sm text-[#454443FF]">${p.price}</p>
          </div>

          <p className="text-sm text-[#7D7C7C]  sm:block md:block lg:block ">
            {p.description.slice(0, 30)}...
          </p>

          <p className="text-sm text-black flex items-center gap-1">
                {Array(5)
                .fill(0)
                .map((_, index) => (
                   <span key={index} className="text-green-700">★</span>
              ))}
             ({p.rating?.count || 0})
             </p>


          <button className="text-[#454443FF] font-semibold text-sm border px-3 lg:px-4 md:px-4 py-1 mt-2 border-[#454443FF] rounded-2xl hover:bg-[#003C26FF] hover:text-[#B8D7CDFF] transition">
            Add to Cart
          </button>
        </div>
      </Link>
    ))
  ) : (
    <div className="w-full text-center py-5 text-lg">No products available</div>
  )}
</div>

      </div>
    );
  }

export default Cards;
