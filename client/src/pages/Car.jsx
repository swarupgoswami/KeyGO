import React, { useState } from "react";
import Title from "../components/Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";

const Car = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Available cars"
          subTitle="browse our selction of premium vechiles for your next adventure "
        />

        {/* seach section div */}
        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-lg">
          <img
            src={assets.search_icon}
            alt="search icon"
            className="w-4.5 h-4.5 mr-2"
          />
          <input
            onClick={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
            placeholder="search by make,model, or features"
            name=""
            id=""
            className="w-full h-full outline-none text-gray-500"
          />
          <img
            src={assets.filter_icon}
            alt="search icon"
            className="w-4.5 h-4.5 ml-2"
          />
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">

        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">{dummyCarData.length} cars</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {dummyCarData.map((car,index)=>(
            <div key={index} className="">
              <CarCard car={car}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Car;
