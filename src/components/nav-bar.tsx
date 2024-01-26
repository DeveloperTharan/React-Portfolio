import { useState } from "react";

import { SideBar } from "./side-bar";

import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Contact } from "../page/contact";

export const NavBar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center w-ful h-full">
      <div className="flex flex-row gap-x-2 items-center">
        <div className="h-3 w-3 rounded-full bg-green-600" />
        <div className="h-3 w-3 rounded-full bg-green-600" />
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <Contact>Contect Me</Contact>

        <div className="lg:hidden" role="button" onClick={() => setOpen(true)}>
          <CiMenuFries className="h-7 w-7" />
        </div>
        {Open && (
          <div className="absolute top-0 left-0 w-full h-full bg-[#1c1b23] lg:hidden p-5 z-50 overflow-hidden">
            <div
              className="flex justify-end items-end text-3xl"
              role="button"
              onClick={() => setOpen(false)}
            >
              <IoCloseOutline />
            </div>
            <div className="w-full h-full my-4">
              <SideBar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
