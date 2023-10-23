import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profile from "../../assets/profile.png";
import Skills from "./Skills";
import AButtons from "./AButtons";

function About() {
  const paragraph = [
    {
      paragraph1:
        "A Passionated Software and web Developer proficient in programmin like Java, Javascript and also have a knowledge in database, I can  build a fullstack web application. Adaptable and open to divarse work environment, I am eager to take a challanging position where I can implement coding knowledge to further enhance my skills and meet company or clients objectives.",

      paragraph2:
        "And also I am good trade and invester over three years. my trading style was price-action and momentum based trading, over these three years i learn more about my emotions and also i learn how do handle that, and my investment knowledge also help you to improve and grow your portfolio over the time period.",
    },
  ];

  return (
    <div id="About" className="h-full mt-44 ms-4 me-4">
      <h1 className="text-2xl 3xl:text-5xl">About Me</h1>
      <div className="h-[1.6px] 4xl:h-[2.5px] bg-white w-10 4xl:w-14 my-1"></div>
      <h2 className="text-2xl 4xl:text-3xl mt-3 text-blue-gray-200">
        <ReactTypingEffect text={["Let Me Introduce Myself."]} />
      </h2>
      <div className="3xl:flex">
        <div
          className="w-52 relative top-3 left-[12%] sm:left-[16%] md:left-[20%] lg:left-[30%] 
          xl:left-[35%] 3xl:hidden"
        >
          <img src={profile} alt="img" />
        </div>
        {paragraph.map((items) => (
          <p 
            className="text-md font-thin font-cursive my-7 text-blue-gray-300"
            key={items.paragraph1}
          >
            {items.paragraph1}
            <br />
            {items.paragraph2}
          </p>
        ))}
        <div className="w-[50%] 4xl:w-[30%] hidden 3xl:block">
          <img src={profile} alt="img" />
        </div>
      </div>
      <div className="mt-5">
        <Skills />
      </div>
      <div className="mt-14">
        <AButtons />
      </div>
    </div>
  );
}

export default About;
