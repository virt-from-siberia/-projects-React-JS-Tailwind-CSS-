import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Growing with data dnalytics
        </p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center">
          <p className="text-xl font-bold md:text-5xl sm:text-4xl">
            Fast, flexible financing for
          </p>
          <Typed
            className="pl-2 text-xl font-bold md:text-5xl sm:text-4xl"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
          />
        </div>
        <p className="mt-2 text-xl font-bold text-gray-500 md:pl-4 md:text-2xl">
          Lorem ipsum dolor sit amet.
        </p>

        <button className="bg-[#00df9a] w-[200px] rounded-xl font-medium my-6 mx-auto py-3 text-black">
          Get started
        </button>
      </div>
    </div>
  );
};
