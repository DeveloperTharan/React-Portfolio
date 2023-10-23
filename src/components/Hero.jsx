import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const slideVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-200%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="text-center relative top-52 h-screen overflow-x-hidden">
      <motion.div variants={textVariants} initial="initial" animate="animate">
        <motion.h5
          className="capitalize tracking-wide text-lg 4xl:text-xl font-medium mb-3 text-purple-700"
          variants={textVariants}
        >
          hello world!
        </motion.h5>

        <motion.h1
          className="text-3xl md:text-4xl 4xl:text-6xl lg:text-5xl capitalize mb-4 tracking-wider"
          variants={textVariants}
        >
          i am dharanitharan.
        </motion.h1>

        <motion.h6
          className="text-md lg:text-lg 4xl:text-xl capitalize mb-10 4xl:mb-14"
          variants={textVariants}
        >
          software developer | trader
          <ReactTypingEffect text={["..."]} />
        </motion.h6>

        <motion.a
          href="#About"
          className="border w-fit px-2 py-2 rounded-md relative left-[30%] sm:left-[35%] lg:left-[43%] 
          4xl:left-[45%] flex gap-2"
          variants={textVariants}
        >
          <IoIosArrowDown className="" />
          <span className="text-xs 4xl:text-[16px] capitalize cursor-pointer">
            more about me
          </span>
        </motion.a>

        <div className="flex justify-center gap-7 mt-36">
          <motion.a
            href="https://www.instagram.com/thxran_._/"
            className="text-xl 4xl:text-2xl hover:text-purple-500"
            variants={textVariants}
          >
            <AiOutlineInstagram />
          </motion.a>

          <motion.a
            href="https://www.twitter-x.com/thxran_._/"
            className="text-xl 4xl:text-2xl hover:text-gray-700"
            variants={textVariants}
          >
            <RiTwitterXLine />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dharanitharan-p-4b0b84278/"
            className="text-xl 4xl:text-2xl hover:text-blue-500"
            variants={textVariants}
          >
            <FiLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/DeveloperTharan"
            className="text-xl 4xl:text-2xl hover:text-gray-700"
            variants={textVariants}
          >
            <AiOutlineGithub />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="absolute text-[15rem] bottom-[150px] whitespace-nowrap text-[#ffffff09] w-[50%] -z-10"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Developer Trader
      </motion.div>
    </div>
  );
}

export default Hero;
