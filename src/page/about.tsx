import { Button, Image, Link } from "@nextui-org/react";

import { HiReceiptPercent } from "react-icons/hi2";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigat = useNavigate();

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        className="flex flex-col lg:flex-row gap-7 lg:gap-0 justify-start items-center text-center bg-[#14131a] 
        shadow-2xl rounded-lg h-auto w-full p-5"
      >
        <Image
          src="/about.webp"
          alt="about"
          className="h-56 w-full lg:w-[40rem] rounded-md"
        />
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h1 className="text-white text-2xl font-semibold">
            👋 Hi ! I am Dharanitharan 🙏
          </h1>
          <p className="text-sm my-2">
            Tech enthusiast pursuing a B.Sc in Mathematics at The American
            College. Passionate about programming, development and Finance.
          </p>
          <div className="flex flex-row gap-x-4 justify items-center my-4">
            <Button
              size="sm"
              variant="solid"
              color="success"
              startContent={<HiReceiptPercent />}
              onClick={() => navigat("/contact")}
            >
              Hier Me
            </Button>
            <Link href="" download={"/logo.svg"}>
              <Button
                size="sm"
                variant="solid"
                color="success"
                startContent={<AiOutlineFilePdf />}
              >
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-7 justify-start items-center text-center bg-[#14131a] 
        shadow-2xl rounded-lg h-auto w-full p-5 mb-5"
      >
        <div className="flex flex-col lg:flex-row gap-7 justify-start items-center text-center">
          <div className="text-start w-full">
            <p className="text-sm my-2">
              A Passionated Software and web Developer proficient in programmin
              like Java, Javascript and also have a knowledge in database, I can
              build a fullstack web application. Adaptable and open to divarse
              work environment, I am eager to take a challanging position where
              I can implement coding knowledge to further enhance my skills and
              meet company or clients objectives.
            </p>
          </div>
          <Image
            src="/programming.webp"
            alt="about"
            className="h-56 w-full lg:w-[40rem] rounded-md"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-7 justify-start items-center text-center">
          <Image
            src="/trading.webp"
            alt="about"
            className="h-56 w-full lg:w-[40rem] rounded-md"
          />
          <div className="text-start w-full">
            <p className="text-sm my-2">
              And also I am good trade and invester over three years. my trading
              style was price-action and momentum based trading, over these
              three years i learn more about my emotions and also i learn how do
              handle that, and my investment knowledge also help you to improve
              and grow your portfolio over the time period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
