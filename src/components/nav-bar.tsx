import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@nextui-org/react";

import { SideBar } from "./side-bar";

import { CiMenuFries, CiHome } from "react-icons/ci";
import { IoPersonOutline, IoCloseOutline } from "react-icons/io5";

export const NavBar = () => {
  const [Open, setOpen] = useState(false);

  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const isContactPage = pathname.endsWith("/contact");

  return (
    <div className="flex flex-row justify-between items-center w-ful h-full">
      <div className="flex flex-row gap-x-2 items-center">
        <div className="h-3 w-3 rounded-full bg-green-600" />
        <div className="h-3 w-3 rounded-full bg-green-600" />
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        {!isContactPage ? (
          <Button
            size="sm"
            variant="solid"
            color="success"
            endContent={<IoPersonOutline />}
            onClick={() => navigate("/contact")}
          >
            Contect Me
          </Button>
        ) : (
          <Button
            size="sm"
            variant="solid"
            color="success"
            endContent={<CiHome />}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        )}
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
