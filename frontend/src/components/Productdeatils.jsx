import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductAction";
import Navbar from "../components/Navbar";
import { addToCart } from "../store/Reducers/CartReducer";
import { asyncAddToCart } from "../store/actions/CartActions";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products) || {
    products: [],
  };
  const dispatch = useDispatch();
  const navigator = useNavigate();


  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  const product = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  if (!product) {
    return <div className="text-center py-10">Product not found!</div>;
  }

  return (
    <div className="w-full h-full flex mt-[2%] flex-col md:flex-row gap-10 justify-center items-center">
      <i
        onClick={() => navigator(-1)}
        className="ri-arrow-left-line cursor-pointer absolute top-20 left-5 text-2xl font-black"
      ></i>
      <div className="w-full md:w-[50%]   items-center flex justify-center">
        <div className="min-w-[100%] p-10 h-[70%]  flex justify-center items-center bg-gray-100 rounded-md">
          <img
            src={product.image || ""}
            alt={product.title || "Product Image"}
            className="w-[50%]  md:max-w-[400px] rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-[50%] mt-[4%] flex flex-col gap-4 text-black">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="flex items-center">
            <span className="text-green-500 text-lg">★★★★★</span>
            <span className="text-green-500 ml-2">
              ({product.rating?.count || 0})
            </span>
          </div>
        </div>

        <div className="w-[57%] border-t-2 border-gray-100 my-4"></div>

        <div className="text-xl font-semibold text-gray-800">
          ${product.price || "N/A"}
        </div>

        <div className="w-[57%] border-t-2 border-gray-100 my-4"></div>

        <div className="bg-gray-600 w-[50%] h-[10%]"></div>
        <div className="mt-3 flex items-center gap-4">
          <button
            className="bg-gray-300 text-black w-8 h-8 rounded-md"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            className="bg-gray-300 text-black w-8 h-8 rounded-md"
            onClick={increaseQuantity}
          >
            +
          </button>
          <span className="text-red-500 ml-2">
            Only {Math.floor(Math.random() * 50) + 1} Items Left!
          </span>
        </div>

        <div className="flex gap-4 mt-5">
          <button className="border-2 border-[#046664]  text-[#046664] py-2 px-8 rounded-full w-full md:w-auto hover:bg-[#046664] hover:text-white">
            Buy Now
          </button>
          <button  onClick={() => dispatch(asyncAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,   // 👈 Ensure `price` is passed here
        image: product.image
    },console.log('add to cart')))} className="border-2 border-[#046664]  text-[#046664] py-2 px-8 rounded-full w-full md:w-auto hover:bg-[#046664] hover:text-white">
            Add to Cart
          </button>
        </div>

        <div className="mt-5 flex flex-col font-semibold w-[60%] pt-3">
          <p className="text-sm  p-4 border-[#85858531] border ">
            <i className=" text-orange-400 text-lg ri-caravan-line"></i> Free
            Delivery -{" "}
            <span className="text-gray-600 underline">
              Enter your postal code for availability
            </span>
          </p>
          <p className="text-sm p-4 border-[#85858531] border  mt-2">
            <i className="text-orange-400 text-lg ri-loop-left-line"></i> Return
            Delivery - Free 30-day returns.{" "}
            <span className="text-gray-600 underline">Details</span>
          </p>
        </div>
      </div>
    </div>

    // <div className="min-h-screen w-full flex justify-center items-center">
    //   <div className="bg-white p-10 rounded-2xl shadow-md w-[100%] max-w-5xl">
    //     <div className="flex gap-10">
    //       <div className="flex-1">
    //         <img
    //           src={product.image || ''}
    //           alt={product.title || 'Product Image'}
    //           className="w-full rounded-lg"
    //         />
    //       </div>

    //       <div className="flex-1">
    //         <h1 className="text-3xl font-bold">{product.title}</h1>
    //         <p className="text-gray-500 mt-2">{product.description}</p>
    //         <div className="flex items-center mt-3">
    //           <span className="text-green-500">★★★★★</span>
    //           <span className="text-gray-400 ml-2">
    //             ({product.rating?.count || 0})
    //           </span>
    //         </div>
    //         <div className="text-xl font-semibold mt-4">
    //           ${product.price || 'N/A'}
    //         </div>

    //         <div className="mt-5 flex items-center gap-4">
    //           <button
    //             className="bg-gray-200 w-8 h-8 rounded-md"
    //             onClick={decreaseQuantity}
    //           >
    //             -
    //           </button>
    //           <span className="text-lg">{quantity}</span>
    //           <button
    //             className="bg-gray-200 w-8 h-8 rounded-md"
    //             onClick={increaseQuantity}
    //           >
    //             +
    //           </button>
    //           <span className="text-orange-500 ml-2">Only 12 Items Left!</span>
    //         </div>

    //         <div className="flex gap-4 mt-5">
    //           <button className="bg-green-700 text-white py-2 px-6 rounded-lg">
    //             Buy Now
    //           </button>
    //           <button className="border-2 border-green-700 py-2 px-6 rounded-lg">
    //             Add to Cart
    //           </button>
    //         </div>

    //         <div className="mt-5 border-t pt-3">
    //           <p className="text-sm text-gray-500">
    //             🚚 Free Delivery - Enter your postal code for availability
    //           </p>
    //           <p className="text-sm text-gray-500 mt-2">
    //             🔄 Return Delivery - Free 30-day returns. Details
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductDetails;
