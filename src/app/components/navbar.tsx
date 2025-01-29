import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-2 py-4 rounded-xl bg-transparent">
        <button className="text-3xl xl:text-5xl font-bold text-white ">
          <span className="underline text-rose-500">fluen</span>cy
        </button>
        <div className="flex items-center gap-5">
          <p className="text-md xl:text-2xl font-medium text-white ">Vinayak Srivastava</p>
          <Image
            width={40}
            height={40}
            src={"/avatar.jpg"}
            alt={"avatar"}
            className="rounded-full"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// Make the text appear when hovering over the buttons
