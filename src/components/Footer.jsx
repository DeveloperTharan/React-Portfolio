import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div 
      className='mt-32 bg-black px-32 pt-12 pb-5 flex flex-col justify-items-center 
      items-center rounded-t-2xl'
    >
      <div className="flex justify-center gap-12">
          <a
            href="https://www.instagram.com/thxran_._/"
            className="text-xl 4xl:text-2xl hover:text-purple-500"
          >
            <AiOutlineInstagram />
          </a>

          <a
            href="https://www.twitter-x.com/thxran_._/"
            className="text-xl 4xl:text-2xl hover:text-gray-700"
          >
            <RiTwitterXLine />
          </a>

          <a
            href="https://www.linkedin.com/in/dharanitharan-p-4b0b84278/"
            className="text-xl 4xl:text-2xl hover:text-blue-500"
          >
            <FiLinkedin />
          </a>

          <a
            href="https://github.com/DeveloperTharan"
            className="text-xl 4xl:text-2xl hover:text-gray-700"
          >
            <AiOutlineGithub />
          </a>
      </div>
      <div className='w-full 3xl:w-3/4 4xl:w-1/2 h-[0.5px] bg-white mt-8 mb-3'></div>  
      <div className='whitespace-nowrap'>Copyright &copy; 2023 | Design by thxran</div>          
    </div>
  ) 
}

export default Footer