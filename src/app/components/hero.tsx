import React from "react";
import Navbar from "./navbar";
import Button from "./button";
import Premium from "./premium";
import Analytics from "./analytics/analytics";
import Pretty from "./pretty";

function Hero() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 h-full bg-black rounded-2xl p-2">
        <Navbar />
        <div className="flex flex-col gap-5 overflow-y-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl xl:text-4xl font-bold font-sans text-white p-2 rounded-xl">
              My Profile
            </h1>
            <div className="flex items-center gap-5">
              <Button text={"Button 1"} variant="secondary" />
              <Button text={"Button 2"} variant="secondary" />
              <Button text={"Button 3"} variant="secondary" />
            </div>
          </div>
          {/* analytics */}
          <Analytics />
          <div className="w-full flex flex-col xl:flex-row justify-between gap-5 items-start p-2">
            <Pretty />
            <Premium />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
