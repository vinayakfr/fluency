import React from "react";
import Button from "./button";

function Premium() {
  return (
    <div className="flex flex-col place-content-end place-items-end w-[30%]">
      <div className="flex flex-col gap-5 place-content-start p-3 rounded-xl bg-white/15">
        <div className="flex flex-col gap-2 place-content-start w-full">
          <h1 className="text-4xl font-bold text-blue-500">
            Unlock Premium Features
          </h1>
          <p className="text-xl font-semibold text-yellow-400">
            Lorem ipsum dolor sit.
          </p>
        </div>

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente
          veniam enim odit ipsum! Officiis, repudiandae! Libero 
        </p>
        <Button text={"Buy Now"} />
      </div>
      <h1 className="text-white/25 text-xl">
        made by <span className="italic">Lana del Array</span>
      </h1>
    </div>
  );
}

export default Premium;
