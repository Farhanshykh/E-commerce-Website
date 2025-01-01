import React from "react";
import Card from "./Card";

const topPicks = [
  {
    image: "/products/1.png",
    title: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    id: 1,
  },
  {
    image: "/products/2.png",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    id: 2,
  },
  {
    image: "/products/3.png",
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    id: 3,
  },
  {
    image: "/products/4.png",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    id: 4,
  },
];

const Hero3 = () => {
  return (
    <>
      <div className="poppins w-full h-auto bg-white flex flex-col justify-center items-center mb-20">
        <div className="w-full  md:w-[80%] flex flex-col justify-between items-center mt-16 px-4">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-base text-xl sm:text-2xl leading-6 tracking-wide">
              Top Picks For You
            </h1>
            <p className="font-base text-xs sm:text-sm leading-6 tracking-wide text-gray-400 mt-4">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor, and table lights.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
            {topPicks.map((elem) => (
              <Card
                key={elem.id}
                image={elem.image}
                title={elem.title}
                price={elem.price}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-12 hover:text-gray-400">
            <button className="w-[115px] h-[49px] border-b-2 border-black">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
