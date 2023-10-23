import React from "react";
import Contatform from "./Contatform"

function Contact() {    
  return (
    <div className="mt-44 w-full grid 3xl:grid-cols-2" id="Contact">
      <div className="w-[80%] ml-10 sm:ml-16 lg:ml-28">
        <h1 className="text-7xl font-extrabold mb-5">Let's work together</h1>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Mail</h3>
          <h6 className="text-blue-gray-400">dharanitharan137@gmail.com</h6>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Phone</h1>
          <h6 className="text-blue-gray-400">+91-63832-17822</h6>
        </div>
      </div>
      <Contatform />
    </div>
  );
}

export default Contact;
