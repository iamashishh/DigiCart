import React from "react";

const categories = [
  { name: "Appliances", img: "/categoryIcons/appliances.jpg"},
  { name: "Mobiles", img: "/categoryIcons/mobiles.jpg" },
  { name: "Auto Accessories", img: "/categoryIcons/Auto Accessories.jpg" },
  { name: "Beauty", img: "/categoryIcons/beauty.png" },
  { name: "Electronics", img: "/categoryIcons/Electronies.jpg" },
  { name: "Fashion", img: "/categoryIcons/fashion.webp" },
  { name: " Fruniture ", img: "/categoryIcons/furniture.jpg" },
  { name: " Gadgets", img: "/categoryIcons/gadgets.jpg" },
  { name: "GenZ Trends", img: "/categoryIcons/genz trends.jpg" },
  { name: " Grocery", img: "/categoryIcons/grocery.jpg" },
  { name: " Home", img: "/categoryIcons/home.jpg" },
  {name:"Sports",img:"/categoryIcons/sports.jpg"},
  {name:"Toys ,Baby",img:"/categoryIcons/toys baby.png"},
  {name:"Next Gen",img:"/categoryIcons/next gen.jpg"},
  {name:"Sports",img:"/categoryIcons/sports.jpg"},
  
  
];


const CategorySection = () => {
  return (
    <div className="categorySection flex bg-green-500 overflow-x-auto flex-wr  w-full justify-between gap-4  py-4 bg-white shado mt-6">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={category.img}
            alt={category.name}
            className="w-16 h-16 object-cover"
          />
          <p className="text-sm font-medium mt-1">{category.name.slice(0,15)}...</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
