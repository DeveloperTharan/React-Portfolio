import React, { useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import project1 from "../../assets/project5.png";
import project2 from "../../assets/project3.png";
import project3 from "../../assets/project2.png";
import project4 from "../../assets/project1.png";
import project5 from '../../assets/project4.png'
import { FaHtml5, FaCss3, FaBootstrap, FaSass, FaReact } from "react-icons/fa6";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { TbBrandRedux } from 'react-icons/tb'
import coiner_logo from "../../assets/coiner-logo.svg";
import triber_logo from "../../assets/triber-logo.svg";
import corso_logo from "../../assets/corso-logo.svg";
import meg_logo from "../../assets/meg-logo.svg";

function TimeLine() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Timeline className="relative lg:left-20 xl:left-36 2xl:left-52 3xl:left-1/2">
        {/* item 1 */}
        <TimelineItem>
          <TimelineConnector/>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src={coiner_logo}
                alt="user 1"
                withBorder
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-duration="600"
                data-aos-once="true"
              />
            </TimelineIcon>
          </TimelineHeader>
          <TimelineBody
            className="pb-20 -mt-10 3xl:w-1/2"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-offset="0"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <Card className="mt-6 -ml-3 3xl:-ml-0 w-full lg:w-[28rem] 4xl:w-full grid 3xl:grid-cols-2 bg-purple-900">
              <CardHeader
                color="blue-gray"
                className="relative h-44 hover:scale-105 duration-500 ease-in-out cursor-pointer"
              >
                <img src={project1} alt="img" className="w-full h-full" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 capitalize"
                >
                  coiner
                </Typography>
                <Typography className="text-gray-500 capitalize text-sm">
                  crypto price traking website with upto date market data by
                  using Rapiedapi and full responsie.
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  Used Stacks :
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                    <FaReact className="text-[20px] text-blue-500" />
                    <span className="text-[16px] text-white">+</span>
                    <BiLogoJavascript className="text-[20px] text-yellow-700" />
                    </div>
                    <BiLogoTailwindCss className="text-[20px] text-blue-500" />
                  </div>
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  <a href="https://github.com/DeveloperTharan/coiner">
                    <div className="flex gap-1">
                      github <AiOutlineGithub className="text-[20px]" />
                    </div>
                  </a>
                  <a href="https://coiner-gamma.vercel.app/">
                    <div className="flex gap-1">
                      Live Demo <PiShareFatLight className="text-[20px]" />
                    </div>
                  </a>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div></div>
              </CardFooter>
            </Card>
          </TimelineBody>
        </TimelineItem>
        {/* item 2 */}
        <TimelineItem>
          <TimelineConnector/>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://imgs.search.brave.com/FIzJUBbzDqhUB6ZAz764lh9ISDmqQBySu0KTrCHC52c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL25ldGZs/aXgtbi5qcGc"
                alt="user 2"
                withBorder
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-duration="600"
                data-aos-once="true"
              />
            </TimelineIcon>
          </TimelineHeader>
          <TimelineBody
            className="pb-20 -mt-10 3xl:w-1/2 relative 3xl:right-[51%]"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-offset="0"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <Card className="mt-6 -ml-3 3xl:-ml-0 w-full grid 3xl:grid-cols-2 bg-purple-900">
              <CardHeader
                color="blue-gray"
                className="relative h-44 hover:scale-105 duration-500 ease-in-out cursor-pointer"
              >
                <img src={project5} alt="img" className="w-full h-full" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 capitalize"
                >
                  Netflix-Clone
                </Typography>
                <Typography className="text-gray-500 capitalize text-sm">
                  Recreate The Netflix With Responsive Design And Implement TMDb Movie
                  Api For Displaying Movie List.
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  Used Stacks :
                  <div className="flex gap-2">
                  <FaReact className="text-[20px] text-blue-500" />
                    <TbBrandRedux className="text-[20px] text-purple-400"/>
                    <BiLogoTailwindCss className="text-[20px] text-blue-500" />
                  </div>
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  <a href="https://github.com/DeveloperTharan/Netflix-clone">
                    <div className="flex gap-1">
                      github <AiOutlineGithub className="text-[20px]" />
                    </div>
                  </a>
                  <a href="https://netflix-clone-eight-fawn.vercel.app/">
                    <div className="flex gap-1">
                      Live Demo <PiShareFatLight className="text-[20px]" />
                    </div>
                  </a>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div></div>
              </CardFooter>
            </Card>
          </TimelineBody>
        </TimelineItem>
        {/* item 3 */}
        <TimelineItem>
          <TimelineConnector/>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src={corso_logo}
                alt="user 1"
                withBorder
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-duration="600"
                data-aos-once="true"
              />
            </TimelineIcon>
          </TimelineHeader>
          <TimelineBody
            className="pb-20 -mt-10 3xl:w-1/2"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-offset="0"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <Card className="mt-6 -ml-3 3xl:-ml-0 w-full lg:w-[28rem] 4xl:w-full grid 3xl:grid-cols-2 bg-purple-900">
              <CardHeader
                color="blue-gray"
                className="relative h-44 hover:scale-105 duration-500 ease-in-out cursor-pointer"
              >
                <img src={project4} alt="img" className="w-full h-full" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 capitalize"
                >
                  corso
                </Typography>
                <Typography className="text-gray-500 capitalize text-sm">
                  online learning website with full responsie and good looking
                  landing page and coures page
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  Used Stacks :
                  <div className="flex gap-2">
                    <FaHtml5 className="text-[20px] text-red-600" />
                    <FaCss3 className="text-[20px] text-blue-700" />
                    <FaSass className="text-[20px] text-pink-600" />
                    <FaBootstrap className="text-[20px] text-purple-300" />
                    <BiLogoJavascript className="text-[20px] text-yellow-700" />
                  </div>
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  <a href="https://github.com/DeveloperTharan/corso">
                    <div className="flex gap-1">
                      github <AiOutlineGithub className="text-[20px]" />
                    </div>
                  </a>
                  <a href="https://corso-nine.vercel.app/">
                    <div className="flex gap-1">
                      Live Demo <PiShareFatLight className="text-[20px]" />
                    </div>
                  </a>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div></div>
              </CardFooter>
            </Card>
          </TimelineBody>
        </TimelineItem>
        {/* item 4 */}
        <TimelineItem>
          <TimelineConnector/>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src={meg_logo}
                alt="user 2"
                withBorder
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-duration="600"
                data-aos-once="true"
              />
            </TimelineIcon>
          </TimelineHeader>
          <TimelineBody
            className="pb-20 -mt-10 3xl:w-1/2 relative 3xl:right-[51%]"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-offset="0"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <Card className="mt-6 -ml-3 3xl:-ml-0 w-full lg:w-[28rem] 4xl:w-full grid 3xl:grid-cols-2 bg-purple-900">
              <CardHeader
                color="blue-gray"
                className="relative h-44 hover:scale-105 duration-500 ease-in-out cursor-pointer"
              >
                <img src={project3} alt="img" className="w-full h-full" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 capitalize"
                >
                  meg
                </Typography>
                <Typography className="text-gray-500 capitalize text-sm">
                  ofice designing full responsive landing page with some
                  funtionalites
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  Used Stacks :
                  <div className="flex gap-2">
                    <FaHtml5 className="text-[20px] text-red-600" />
                    <FaCss3 className="text-[20px] text-blue-700" />
                    <FaSass className="text-[20px] text-pink-600" />
                    <FaBootstrap className="text-[20px] text-purple-300" />
                    <BiLogoJavascript className="text-[20px] text-yellow-700" />
                  </div>
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  <a href="https://github.com/DeveloperTharan/MEG">
                    <div className="flex gap-1">
                      github <AiOutlineGithub className="text-[20px]" />
                    </div>
                  </a>
                  <a href="https://sage-hamster-077818.netlify.app/">
                    <div className="flex gap-1">
                      Live Demo <PiShareFatLight className="text-[20px]" />
                    </div>
                  </a>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div></div>
              </CardFooter>
            </Card>
          </TimelineBody>
        </TimelineItem>
        {/* item 5 */}
        <TimelineItem>
          {/* <TimelineConnector/> */}
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src={triber_logo}
                alt="user 2"
                withBorder
                data-aos="fade-zoom-in"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-duration="600"
                data-aos-once="true"
              />
            </TimelineIcon>
          </TimelineHeader>
          <TimelineBody
            className="pb-20 -mt-10 3xl:w-1/2"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-offset="0"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <Card className="mt-6 -ml-3 3xl:-ml-0 w-full lg:w-[28rem] 4xl:w-full grid 3xl:grid-cols-2 bg-purple-900">
              <CardHeader
                color="blue-gray"
                className="relative h-44 hover:scale-105 duration-500 ease-in-out cursor-pointer"
              >
                <img src={project2} alt="img" className="w-full h-full" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 capitalize"
                >
                  Triber Explore
                </Typography>
                <Typography className="text-gray-500 capitalize text-sm">
                  Tours and travel website with good interface and full
                  responsive
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  Used Stacks :
                  <div className="flex gap-2">
                    <FaHtml5 className="text-[20px] text-red-600" />
                    <FaCss3 className="text-[20px] text-blue-700" />
                    <FaSass className="text-[20px] text-pink-600" />
                    <FaBootstrap className="text-[20px] text-purple-300" />
                    <BiLogoJavascript className="text-[20px] text-yellow-700" />
                  </div>
                </Typography>
                <Typography className="text-gray-300 capitalize text-sm mt-2 flex gap-3">
                  <a href="https://github.com/DeveloperTharan/Triber-Explore">
                    <div className="flex gap-1">
                      github <AiOutlineGithub className="text-[20px]" />
                    </div>
                  </a>
                  <a href="https://triber-explore.vercel.app/">
                    <div className="flex gap-1">
                      Live Demo <PiShareFatLight className="text-[20px]" />
                    </div>
                  </a>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div></div>
              </CardFooter>
            </Card>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimeLine;