import { Link, useNavigate } from "react-router-dom";

import { CiHome } from "react-icons/ci";
import { RiMovie2Line } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { IoMailOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoVideocamOutline } from "react-icons/io5";
import { PiBracketsAngleThin } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";

export const SideBar = () => {
  const navigator = useNavigate();
  const pathname = window.location.pathname;

  const Menu = [
    {
      id: 1,
      name: "Home",
      Icon: CiHome,
      path: "/",
    },
    {
      Icon: RiMovie2Line,
      id: 2,
      name: "My Content",
      path: "/content",
      disable: true,
    },
    {
      Icon: IoVideocamOutline,
      id: 3,
      name: "Videos",
      path: "/videos",
      disable: true,
    },
    {
      id: 4,
      name: "About",
      Icon: PiBracketsAngleThin,
      path: "/about",
    },
  ];

  const socials = [
    {
      id: 1,
      name: "Linkedin",
      Icon: <SlSocialLinkedin className="text-blue-600" />,
      href: "https://www.linkedin.com/in/dharanitharan-p/",
    },
    {
      id: 2,
      name: "Github",
      Icon: <VscGithubAlt className="text-green-600" />,
      href: "https://github.com/DeveloperTharan",
    },
    {
      id: 3,
      name: "Gmail",
      Icon: <IoMailOutline className="text-orange-600" />,
      href: "https://www.gmail.com/tharan120723@gmail.com",
    },
    {
      id: 4,
      name: "Instagram",
      Icon: <PiInstagramLogoLight className="text-pink-600" />,
      href: "https://www.instagram.com/thxran_._/",
    },
  ];

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
          {socials.map((items) => (
            <Link
              className="flex flex-row items-center gap-x-3 p-2 relative top-0 hover:-top-1 transition-all 
              ease-linear w-full group text-sm"
              role="button"
              key={items.id}
              to={items.href}
            >
              <div className="h-4 w-4">{items.Icon}</div>
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
