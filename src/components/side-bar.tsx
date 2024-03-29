import { cn } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

import { Menu } from "../constants/menu-constants";
import { Socials } from "../constants/social-constants";

import { IoIosArrowRoundForward } from "react-icons/io";

export const SideBar = () => {
  const navigator = useNavigate();
  const pathname = window.location.pathname;

  return (
    <div className="flex flex-col justify-start items-start w-full h-full gap-10">
      <div className="flex flex-col gap-y-2 w-full">
        {Menu.map((items) => (
          <button
            className={`flex flex-row items-center gap-x-3 p-2 relative top-0 hover:-top-1 transition-all 
            ease-linear w-full group text-sm ${
              pathname === items.path && "text-green-600"
            }`}
            key={items.id}
            onClick={() => navigator(`${items.path}`)}
            disabled={items.disable === true}
          >
            <items.Icon className="h-4 w-4" />
            <span className="">{items.name}</span>
            <IoIosArrowRoundForward
              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity 
              duration-1000 ease-linear ml-auto"
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-y-3 w-full">
        <h2 className="text-lg">Socials</h2>
        <div className="flex flex-col gap-y-2 w-full">
          {Socials.map((items) => (
            <Link
              className="flex flex-row items-center gap-x-3 p-2 relative top-0 hover:-top-1 transition-all 
              ease-linear w-full group text-sm"
              role="button"
              key={items.id}
              to={items.href}
              target="_blank"
            >
              <items.Icon className={cn("h-4 w-4", items.color)} />
              <span className="">{items.name}</span>
              <IoIosArrowRoundForward
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity 
              duration-1000 ease-linear ml-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
