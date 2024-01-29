import { Link } from "@nextui-org/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Projects } from "../../constants/add-project-constants";

export const AdditionalProjects = () => {
  return (
    <div className="w-full h-auto bg-[#14131a] p-3 rounded-lg shadow-2xl">
      <h1 className="text-lg text-gray-300 font-medium">More Projects</h1>
      <div className="flex flex-col gap-y-2 w-full mt-3">
        {Projects.map((items) => (
          <div key={items.id} className="w-full">
            <Link
              className="flex flex-row items-center gap-x-3 text-gray-500"
              role="button"
              href={items.github}
            >
              <items.icon className="h-4 w-4" />
              <span className="text-[16px]">{items.name}</span>
              <IoIosArrowRoundForward className="h-6 w-6 ml-auto" />
            </Link>
            <span className="text-[10px] mb-2">{items.techstacks}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
