import React from "react";

import { GoProject } from "react-icons/go";
import { RiGlobeLine } from "react-icons/ri";
import { LuBookOpenCheck } from "react-icons/lu";
import { SiAltiumdesigner } from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@nextui-org/react";

export const AdditionalProjects = () => {
  const projects = [
    {
      id: 1,
      name: "corso",
      github: "https://github.com/DeveloperTharan/corso",
      techstacks: "HTML5, CSS3, Bootstrap, Sass, Javascript.",
      icon: LuBookOpenCheck,
    },
    {
      id: 2,
      name: "MEG",
      github: "https://github.com/DeveloperTharan/MEG",
      techstacks: "HTML5, CSS3, Bootstrap, Sass, Javascript.",
      icon: SiAltiumdesigner,
    },
    {
      id: 3,
      name: "Tripal Explore",
      github: "https://github.com/DeveloperTharan/Triber-Explore",
      techstacks: "HTML5, CSS3, Bootstrap, Sass, Javascript.",
      icon: RiGlobeLine,
    },
    {
      id: 1,
      name: "Js-mini-projects",
      github: "https://github.com/DeveloperTharan/JS-mini-projects",
      techstacks: "HTML5, CSS3, Javascript.",
      icon: GoProject,
    },
  ];
  return (
    <div className="w-full h-auto bg-[#14131a] p-3 rounded-lg shadow-2xl">
      <h1 className="text-lg text-gray-300 font-medium">More Projects</h1>
      <div className="flex flex-col gap-y-2 w-full mt-3">
        {projects.map((items) => (
          <>
            <Link
              className="flex flex-row items-center gap-x-3 text-gray-500"
              role="button"
              key={items.id}
              href={items.github}
            >
              <items.icon className="h-4 w-4" />
              <span className="text-[16px]">{items.name}</span>
              <IoIosArrowRoundForward className="h-6 w-6 ml-auto" />
            </Link>
            <span className="text-[10px] mb-2">{items.techstacks}</span>
          </>
        ))}
      </div>
    </div>
  );
};
