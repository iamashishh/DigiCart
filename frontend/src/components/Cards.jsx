import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductAction";

const Cards = () => {
  const { products } = useSelector((state) => state.products) || { products: [] };
  // console.log(products);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  return (
    <div className="flex  flex-wrap   py-5 w-full h-full  ">
      <h1 className="text-3xl font-bold text-[#242424FF] mb-10">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center overflow-hidden p-4">
  {products.length > 0 ? (
    products.map((p) => (
      <Link
        key={p.id}
        to={`/details/${p.id}`}
        className="flex flex-col pb-5  gap-1 items-center rounded  "
      >
        <div className="w-[90%] max-sm:w-[90%] h-[70%] mb-5 flex items-center justify-center bg-[#F6F6F6] rounded">
          <img
            className="w-[50%] object-cover mix-blend-multiply"
            src={p.image || "https://via.placeholder.com/150"} 
            alt={p.title || "Product Image"}
          />
        </div>

        <div className="flex flex-col gap-1 items-start w-full px-2">
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-clip">{p.title}</p>
            <p className="font-bold text-sm text-[#454443FF]">${p.price}</p>
          </div>

          <p className="text-sm text-[#7D7C7C]">
            {p.description.slice(0, 30)}...
          </p>

          <p className="text-sm text-[#046664]">
            ({p.rating?.count || 0})
          </p>

          <button className="text-[#454443FF] text-sm font-semibold border px-3 py-2 border-[#046664] rounded-2xl hover:bg-[#046664] hover:text-white hover:opacity-90 transition">
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
