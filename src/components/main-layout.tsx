import React from "react";
import { NavBar } from "./nav-bar";
import { SideBar } from "./side-bar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full p-5">
      <div className="w-full h-full flex flex-row gap-x-2">
        <div className="bg-[#1c1b23] h-full w-64 p-6 rounded-md overflow-auto hidden lg:block">
          <SideBar />
        </div>
        <div className="bg-[#1c1b23] h-full w-full p-4 rounded-md overflow-auto">
          <div className="w-full h-fit mb-2 px-4">
            <NavBar />
          </div>
          <div className="w-full h-full my-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
