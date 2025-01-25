import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";

function Sidebar() {
  return (
    <div className="flex flex-col gap-20 place-content-start place-items-center bg-transparent pr-5 pl-2 py-24">
      <div className="grid grid-cols-1 grid-rows-3 gap-y-10 items-center">
        <a href="/" className="group flex items-center">
          <LuLayoutDashboard size={40} color="white" />
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-cyan-500 rounded-xl p-2 left-20"
          >
            Dashboard
          </p>
        </a>
        <button className="group flex items-center">
          <MdOutlineDriveFolderUpload size={40} color="white" />
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-cyan-500 rounded-xl p-2 left-20"
          >
            Upload
          </p>
        </button>
        <a href="/analytics" className="group flex items-center">
          <MdOutlineAnalytics size={40} color="white" />
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-cyan-500 rounded-xl p-2 left-20"
          >
            Analytics
          </p>
        </a>
        <button className="group flex items-center">
          <MdOutlineCalendarMonth size={40} color="white" />
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-cyan-500 rounded-xl p-2 left-20"
          >
            Calendar
          </p>
        </button>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-y-10 items-center">
        <button className="group flex items-center">
          <IoMdSettings size={40} color="white" />
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-cyan-500 rounded-xl p-2 left-20"
          >
            Settings
          </p>
        </button>
        <button className="group flex items-center">
          <IoIosHelpCircleOutline size={40} color="white" />
          <p
            className="absolute text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-cyan-500 rounded-xl p-2 left-20"
          >
            Help
          </p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
