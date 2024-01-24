import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ProjectCard } from "./components/project-card";
import { Skills } from "./components/skills";
import { AdditionalProjects } from "./components/addit-projects";

export const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="relative h-fit w-full">
        <div className="bg-[url('/cover.jpeg')] h-[150px] w-full bg-cover bg-center">
          <div className="w-full h-full flex flex-row justify-center lg:justify-between items-center backdrop-blur-lg px-5 lg:px-10">
            <div className="flex flex-row gap-x-5 items-center">
              <img
                src="/profile.png"
                alt="profile"
                className="h-24 w-24 border-3 border-white rounded-full"
              />
              <div className="flex flex-col justify-center items-start text-white">
                <h1 className="text-2xl font-semibold">Dharanitharan</h1>
                <p className="text-xs">@thxran</p>
                <p className="text-xs">Developer & Trader</p>
              </div>
            </div>
            <Link
              to={"/"}
              className="bg-slate-950 text-gray-500 p-2 flex flex-row items-center gap-x-4 text-sm rounded-md
              mt-10 -ml-7 lg:mt-0 lg:-ml-0"
              role="button"
            >
              <PiInstagramLogoLight />
              <span className="hidden lg:block">Connect with Me</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full my-5">
        <h1 className="text-xl font-semibold mb-4">Projects</h1>
        <ProjectCard />
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-x-4 w-full">
        <div className="w-full xl:w-[75%] my-5 xl:my-10">
          <h1 className="text-xl font-semibold mb-4">What I Know</h1>
          <Skills />
        </div>
        <div className="w-full xl:w-[25%] my-4 xl:my-6">
          <AdditionalProjects />
        </div>
      </div>
    </div>
  );
};
