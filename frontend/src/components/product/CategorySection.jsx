import React from "react";

const categories = [
  { name: "Kilos", img: "https://rukminim1.flixcart.com/flap/83/83/image/29327f40e9c4d26b.png?q=100" },
  { name: "Mobiles", img: "https://rukminim1.flixcart.com/flap/83/83/image/22fddf3c7da4c4f4.png?q=100" },
  { name: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIB3x2NJRIl4yl_qFMTcXzPOoGEFcR_uVDxw&s" },
  { name: "Electronics", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSv5EGJPxJl7zvF8XkdNqdKjIa6yOyn4aWXYuTb66bLTPbmJ-bR" },
  { name: "Home & Furniture", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRd2ik9Oz5h13yCurjzqqccFHwu8M8PJ7WM-I7S0A1X4dIWocCv" },
  { name: "Appliances", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8U84Hx7V6wKX1rCo5h2tZrt4Zy8aABZY5bQ&s" },
  { name: "Auto Accessories", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iPL6mgjOjSfVkxgEpnK8ScNcOIQ0vE2FoA&s" },
  { name: " Toys ", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkwvCQY5-PWXzdrxmpQB2eNhrNM2y1zqNfre0D5g7eH8dXB2Kf" },
  { name: " Gadgets", img: "https://coffeegraphy.com/wp-content/uploads/2013/08/gadgets-for-writing.jpg" },
  { name: "Auto Accessories", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iPL6mgjOjSfVkxgEpnK8ScNcOIQ0vE2FoA&s" },
  { name: " Toys ", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkwvCQY5-PWXzdrxmpQB2eNhrNM2y1zqNfre0D5g7eH8dXB2Kf" },
  { name: " Gadgets", img: "https://coffeegraphy.com/wp-content/uploads/2013/08/gadgets-for-writing.jpg" },
  {name:"Home",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiYoonD1KPbBV5BVoHxA3Nt4xjK7wHFJnrQ&s"}
];


const CategorySection = () => {
  return (
    <div className="flex w-full justify-between max-sm:hidden max-sm:flex-nowrap max-md:flex-wrap gap-6 py-4 bg-white shado mt-6">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={category.img}
            alt={category.name}
            className="w-16 h-16 object-cover"
          />
          <p className="text-sm font-medium mt-2">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
