"use client";

import { useProgress } from "@react-three/drei";
import React from "react";
import { appleImg } from "@/utils";

const Loader = () => {
  const { progress } = useProgress(); // This reads progress only

  return (
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="relative flex flex-col items-center">
          <div className="w-[20vw]  h-[8vw] flex justify-center items-center">
            <img
              src={appleImg}
              alt="Apple logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="w-[50vw] md:w-full h-2 bg-gray-300 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-white transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
  );
};

export default Loader;
