import React from "react";

function Navbar() {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-2 py-4 rounded-xl bg-transparent">
        <button className="text-5xl font-bold text-white ">
          <span className="underline text-rose-500">fluen</span>cy
        </button>
        <div className="flex items-center gap-5">
          <p className="text-2xl font-medium text-white ">Vinayak Srivastava</p>
          <img
            src="avatar.jpg"
            alt="profile"
            className="rounded-full h-14 w-14"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// Make the text appear when hovering over the buttons
