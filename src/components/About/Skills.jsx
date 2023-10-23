import React, { useEffect } from "react";
import { FaHtml5, FaCss3, FaJava, FaBootstrap, FaSass, FaReact, } from "react-icons/fa6";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="flex sm:gap-2 lg:gap-4 4xl:gap-5"
      data-aos="fade-zoom-in"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <h2 className="capitalize font-medium text-md xl:text-lg 4xl:text-xl whitespace-nowrap text-blue-gray-200">
        my skills :
      </h2>
      <div className="flex justify-center items-center gap-3 md:gap-5 4xl:gap-8">
        <div className="flex sm:gap-1 md:gap-2">
          <FaHtml5 className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-red-600" />
          <FaCss3 className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-blue-700" />
        </div>
        <div className="flex sm:gap-1 md:gap-2">
          <FaSass className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-pink-600" />
          <FaBootstrap className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-purple-700" />
          <BiLogoTailwindCss className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-blue-500" />
        </div>
        <div className="flex sm:gap-1 md:gap-2">
          <BiLogoJavascript className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-yellow-700" />
          <FaReact className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-blue-500" />
        </div>
        <FaJava className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-blue-gray-500" />
        <SiMysql className="text-[20px] sm:text-[22px] lg:text-[25px] 2xl:text-[27px] text-white" />
      </div>
    </div>
  );
}

export default Skills;
