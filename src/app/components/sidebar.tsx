"use client"
// import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Link from "next/link";

function Sidebar() {

  // const [isOpen, setIsOpen] = useState(false);

  // function handleSidebar() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="flex flex-col gap-20 place-content-start place-items-center bg-transparent pr-4 pl-4 py-24 !bg-black rounded-2xl h-full">
      <div className="grid grid-cols-1 grid-rows-3 gap-y-10 place-content-center items-center">
        <Link href="/" className="group flex items-center">
          <LuLayoutDashboard size={40} color="white" />
          {/* <LuLayoutDashboard size={40} color="white" className="hidden dark:block"/> */}
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-rose-500 rounded-xl p-2 left-20"
          >
            Dashboard
          </p>
        </Link>
        <button className="group flex items-center">
          <MdOutlineDriveFolderUpload size={40} color="white" />
          {/* <MdOutlineDriveFolderUpload size={40} color="white" className="hidden dark:block"/> */}
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-rose-500 rounded-xl p-2 left-20"
          >
            Upload
          </p>
        </button>
        <Link href="/analytics" className="group flex items-center">
          <MdOutlineAnalytics size={40} color="white" />
          {/* <MdOutlineAnalytics size={40} color="white" className="hidden dark:block"/> */}
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-rose-500 rounded-xl p-2 left-20"
          >
            Analytics
          </p>
        </Link>
        <button className="group flex items-center">
          <MdOutlineCalendarMonth size={40} color="white" />
          {/* <MdOutlineCalendarMonth size={40} color="whiblacke" className="hidden dark:block"/> */}
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-rose-500 rounded-xl p-2 left-20"
          >
            Calendar
          </p>
        </button>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-y-10 items-center">
        <button className="group flex items-center">
          <IoMdSettings size={40} color="white" />
          {/* <IoMdSettings size={40} color="white" className="hidden dark:block"/> */}
          <p
            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-rose-500 rounded-xl p-2 left-20"
          >
            Settings
          </p>
        </button>
        <button className="group flex items-center">
          <IoIosHelpCircleOutline size={40} color="white" />
          {/* <IoIosHelpCircleOutline size={40} color="white" className="hidden dark:block"/> */}
          <p
            className="absolute text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 
             bg-rose-500 rounded-xl p-2 left-20"
          >
            Help
          </p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
