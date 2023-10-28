import React, { useEffect } from "react";
import { BsFiletypePdf } from "react-icons/bs";
import Resume from "../../assets/Resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

function AButtons() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex gap-8">
      <a
        href=""
        download={Resume}
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <button className="flex items-center gap-3 px-3 py-1 bg-purple-900 rounded-md">
          <BsFiletypePdf className="text-white text-lg" />
          Resume
        </button>
      </a>
      <a
        href="#Contact"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <button className="flex items-center gap-3 px-3 py-1 bg-purple-900 rounded-md">
          Hire Me
        </button>
      </a>
    </div>
  );
}

export default AButtons;
