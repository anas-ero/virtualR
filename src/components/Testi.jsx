import React from "react";

import { testimonials } from "../constants/index"


const Testi = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testi, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 bg-neutral-800 font-thin">
              <p className="font-mono">{testi.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testi.image}
                  alt=""
                />
                <div>
                    <h6>
                        {testi.user}
                    </h6>
                    <span className="text-sm font-normal italic text-neutral-600">{testi.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testi;
