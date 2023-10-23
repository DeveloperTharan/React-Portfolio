import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Service({ icon, title, desc }) {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <div
      className="flex flex-col justify-items-center items-center text-center cursor-pointer"
      data-aos="fade-zoom-in"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <div className="text-3xl my-4 text-purple-500">{icon}</div>
      <h3 className="text-xl my-3">{title}</h3>
      <div className="bg-white w-[55%] h-[1px]"></div>
      <p className="text-sm my-4 w-[90%]">{desc}</p>
    </div>
  );
}

export default Service;
