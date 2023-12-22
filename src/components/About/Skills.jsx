import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { FaSass, FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";

function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="flex flex-col justify-start items-center xl:flex-row gap-5"
      data-aos="fade-zoom-in"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <h2 className="capitalize font-medium text-3xl whitespace-nowrap text-blue-gray-200 mt-2">
        my skills :
      </h2>
      <div className="flex justify-normal items-center gap-5 flex-wrap">
        <AiOutlineHtml5
          className="h-12 w-12 p-2 bg-red-200/100 text-red-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <TbBrandCss3
          className="h-12 w-12 p-2 bg-blue-200/100 text-blue-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <IoLogoJavascript
          className="h-12 w-12 p-2 bg-yellow-200/100 text-yellow-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <BiLogoTypescript className="h-12 w-12 p-2 bg-blue-200/100 text-blue-900 rounded-lg hover:scale-125 cursor-pointer transition duration-500 ease-linear" />
        <SiTailwindcss
          className="h-12 w-12 p-2 bg-blue-200/100 text-blue-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <FaSass
          className="h-12 w-12 p-2 bg-pink-200/100 text-pink-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <FaReact
          className="h-12 w-12 p-2 bg-blue-200/100 text-blue-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <TbBrandNextjs
          className="h-12 w-12 p-2 bg-gray-200/100 text-black rounded-lg hover:scale-125 cursor-pointer transition 
          duration-500 ease-linear"
        />
        <SiRedux
          className="h-12 w-12 p-2 bg-purple-200/100 text-purple-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <IoLogoFirebase
          className="h-12 w-12 p-2 bg-yellow-200/100 text-yellow-900 rounded-lg hover:scale-125 cursor-pointer 
          transition duration-500 ease-linear"
        />
        <DiMysql
          className="h-12 w-12 p-2 bg-gray-200/100 text-black rounded-lg hover:scale-125 cursor-pointer transition 
          duration-500 ease-linear"
        />
        <FaJava
          className="h-12 w-12 p-2 bg-gray-200/100 text-black rounded-lg hover:scale-125 cursor-pointer transition 
          duration-500 ease-linear"
        />
      </div>
    </div>
  );
}

export default Skills;
