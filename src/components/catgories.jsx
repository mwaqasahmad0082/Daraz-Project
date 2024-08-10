import React from "react";
import cat1 from "../images/cat1.jpg"
import cat2 from "../images/cat2.jpg"
import cat3 from "../images/cat3.jpg"
import cat4 from "../images/cat4.jpg"
import cat5 from "../images/cat5.jpg"
import cat6 from "../images/cat6.jpg"
import cat7 from "../images/cat7.jpg"
import cat8 from "../images/cat8.jpg"

import cat9 from "../images/cat10.jpg"
import cat10 from "../images/cat11.jpg"
import cat11 from "../images/cat12.jpg"
import cat12 from "../images/cat13.jpg"
import cat13 from "../images/cat14.jpg"
import cat14 from "../images/cat15.jpg"
import cat15 from "../images/cat16.jpg"
import cat16 from "../images/cat3.jpg"


const Categories = () => {
  const data = [
    { img: cat1, title: "Refrigerator" },
    { img: cat2, title: "Cooking" },
    { img: cat3, title: "Toys & Games" },
    { img: cat4, title: "Toys & Games" },
    { img: cat5, title: "Video Games" },
    { img: cat6, title: "Kitchen Equipment" },
    { img: cat7, title: "Video Games" },
    { img: cat8, title: "Smoking" },
  ];

  const click = [
    { img: cat9, title: "Fashion" },
    { img: cat10, title: "Gadgets" },
    { img: cat11, title: "Electronics" },
    { img: cat12, title: "Headphones" },
    { img: cat13, title: "Stickers" },
    { img: cat14, title: "Headphones" },
    { img: cat15, title: "Gadgets" },
    { img: cat16, title: "Toys & Games" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-40 py-6">
      <h1 className="text-2xl text-slate-500 mb-4">Categories</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6 bg-white border border-slate-200 p-4 rounded-lg">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-slate-200 p-2 rounded-lg hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-20 w-28 object-cover rounded-md mb-2"
            />
            
            <p className="text-sm text-center">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 bg-white border border-slate-200 p-4 rounded-lg">
        {click.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-slate-200 p-2 rounded-lg hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-20 w-28 object-cover rounded-md mb-2"
            />
            <p className="text-sm text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
