import React from "react";
import { FaGlobe, FaMicrosoft, FaChartLine } from "react-icons/fa6";
import Service from "./Service";
import ReactTypingEffect from "react-typing-effect";

function Services() {
  const items = [
    {
      id: 1,
      icon: <FaGlobe />,
      title: "Web Development",
      desription:
        "Develop and provid secure and high performance web-sit and give best services.",
    },
    {
      id: 2,
      icon: <FaMicrosoft />,
      title: "Software Development",
      desription:
        "Develop and provid secure and high performance softwear and give best services.",
    },
    {
      id: 3,
      icon: <FaChartLine />,
      title: "Trading & Inestments",
      desription:
        "provid mentarship and teach how do Trader price-action and invest in forex and crypto market.",
    },
  ];

  return (
    <>
      <div className="mt-44 mb-16">
        <div className="flex flex-col justify-items-center items-center text-center">
          <h1 className="text-2xl 3xl:text-5xl">Service's</h1>
          <div className="h-[1.6px] 4xl:h-[2.5px] bg-white w-10 4xl:w-14 my-1"></div>
          <h3 className="text-xl my-3">
            <ReactTypingEffect text={["What Can I Do For You!"]} />
          </h3>
          <p className="text-xs">
            Here Are Some Of The Services I Offer When It Come To Web
            Development And Financial Instruments
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 gap-10">
        {items.map((items) => (
          <div key={items.id}>
            <Service
              icon={items.icon}
              title={items.title}
              desc={items.desription}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
