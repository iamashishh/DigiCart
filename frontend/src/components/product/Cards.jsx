import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../utils/axios";
import {
  getAllProducts,
  getSingleProductData,
  selectedProductsAddition,
} from "../../store/Reducers/ProductsReducer";

const Cards = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products) || {
    products: [],
  };

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const addItemToCart = async (productId) => {
    const addedProduct = products.find((p) => p._id === productId);
    try {
      const response = await Axios.post(
        "/cart",
        { product: productId, quantity: 1, price: addedProduct.price },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Item added to cart successfully!");
        navigate("/cart");
      }

      console.log(response.data);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  

  const handleProductDetails = async (productId) => {


    try {
      dispatch(getSingleProductData(productId)).then(response=>{
         if (response.payload.success === true) {
        
        navigate(`/details/${productId}`);
      }
      })

     
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <div className="flex  flex-wrap   py-5 w-full h-full  ">
      <h1 className="text-3xl font-bold text-[#242424FF] mb-10">Products</h1>
      <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-3  lg:grid-cols-5 justify-center overflow-hidden px-[-4vw]">
        {products ? (
          products.map((p) => (
            <div key={p._id} className="  mb-4">
              <div
                onClick={() => {
                  handleProductDetails(p._id);
                }}
              >
                <div
                  // to={`/details/${p._id}`}
                  className="flex flex-col  gap-1  items-center rounded bg-blac "
                >
                  <div className="w-58 h-40 max-sm:w-[90%]   overflow-hidden rounded-md flex items-center justify-center bg-[#F6F6F6]  ">
                    <img
                      className="w-full h-full object-cover mix-blend-multiply"
                      src={
                        p.displayImage?.url || "https://via.placeholder.com/150"
                      }
                      alt={p.title || "Product Image"}
                    />
                  </div>

                  <div className="flex flex-col gap-1 max-sm:px-3 items-start w-full px-3 max-md:px-9  md:px-7 lg:px-9">
                    <div className="flex items-center gap-2 justify-between w-full">
                      <p className="text-3 font-bold truncate">{p.name}</p>
                      <p className="font-bold text-sm text-[#454443FF]">
                        ${p.price}
                      </p>
                    </div>

                    <p className="text-sm text-[#7D7C7C]  sm:block md:block lg:block ">
                      {p.description.slice(0, 30)}...
                    </p>

                    <p className="text-sm text-black flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <span key={index} className="text-green-700">
                            ★
                          </span>
                        ))}
                      ({p.rating?.count || 0})
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 max-md:px-9  md:px-7 lg:px-9 max-sm:px-3">
                <button
                  onClick={() => {
                    addItemToCart(p._id);
                  }}
                  className="text-[#454443FF] font-semibold  border-[2px]  px-3 lg:px-4 md:px-4 py-1 mt-2 border-[#eee] rounded-2xl hover:bg-[#003C26FF] hover:text-[#B8D7CDFF] transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center py-5 text-lg">
            No products available
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
