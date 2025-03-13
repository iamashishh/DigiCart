import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className=" flex flex-wrap gap-3 py-5 overflow-hidden w-full h-full px-[5%] ">
      <Link to="/details/1" className="w-[20%] h-[30vh] pt-5 flex flex-col gap-1 items-center shadow-[8px_17px_38px_2px_rgba(0,0,0,.2)] ">
      <img
        className=" w-[40%] object-cover "
        src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        alt=""
      />
      <h1 className=" font-semibold">
      Wireless Earbuds, IPX8
      </h1>
      </Link>
      
    </div>
  );
};

export default Cards;
