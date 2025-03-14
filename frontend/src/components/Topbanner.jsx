import React from 'react'
import { Link } from 'react-router-dom'

const Topbanner = () => {
  return (
    <div className=" absolute top-0 left-0 popup-top px-8 py-4 w-[100vw] text-white  flex justify-between items-center h-[5vh] bg-[#003C26] overflow-hidden rounded-none border border-[#003C26] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]">
<div>
  <p className=" ">+001234567890</p>
</div>
<div className="flex items-center gap-5">
  <p>Get 50% Off on Selected Items</p>
  <Link className=" text-lg font-bold">Shop Now</Link>
</div>
<div className="flex items-center gap-5">
  <Link className=" text-lg font-bold">Eng</Link>
  <Link className=" text-lg font-bold">Location</Link>
</div>
</div>
  )
}

export default Topbanner