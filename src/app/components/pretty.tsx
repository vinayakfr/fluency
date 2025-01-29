import React from "react";
import Topics from "./topics";

function Pretty() {
  return (
    <div className="relative flex flex-col gap-4 p-3 bg-white/10 rounded-xl w-full xl:w-[70%] xl:h-[20rem] overflow-hidden">
      <div className="absolute h-[15rem] xl:h-[25rem] w-[15rem] xl:w-[25rem] bg-gradient-to-br from-red-600 via-rose-400 to-cyan-300 rounded-full bottom-44 -right-12 animate-float1" />
      <div className="absolute h-[10rem] xl:h-[15rem] w-[10rem] xl:w-[15rem] bg-gradient-to-tl from-red-600 via-rose-400 to-cyan-300 rounded-full top-[10rem] -left-5 animate-float2" />
      <h1 className="relative text-3xl font-bold text-white">Topics Covered</h1>
      <div className="grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-5">
        <Topics topic={"Topic 1"} hours={10} />
        <Topics topic={"Topic 1"} hours={10} />
        <Topics topic={"Topic 1"} hours={10} />
        <Topics topic={"Topic 1"} hours={10} />
        <Topics topic={"Topic 1"} hours={10} />
        <Topics topic={"Topic 1"} hours={10} />
      </div>
    </div>
  );
}

export default Pretty;
