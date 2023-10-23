import React from "react";
import { useForm } from "react-hook-form";

function Contatform() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <div className="ml-10 sm:ml-16 lg:ml-28 mt-10 2xl:ml-0 2xl:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          className="mb-2 bg-transparent border-[1.5px] border-blue-gray-500 rounded-md 
          outline-none px-1 w-[80%] py-1"
          type="text"
          placeholder="Name"
          {...register("Name", {})}
        />
        <input
          className="my-2 bg-transparent border-[1.5px] border-blue-gray-500 rounded-md 
          outline-none px-1 w-[80%] py-1"
          type="email"
          placeholder="Email"
          {...register("Email", { pattern: /@gmail.com/i })}
        />
        <input
          className="my-2 bg-transparent border-[1.5px] border-blue-gray-500 rounded-md 
          outline-none px-1 w-[80%] py-1"
          type="number"
          placeholder="Mobile"
          {...register("Mobile", {})}
        />
        <textarea
          className="w-[80%] my-2 bg-transparent border-[1.5px] border-blue-gray-500 rounded-md 
          outline-none px-1"
          rows={4}
          placeholder="Message"
          {...register("Message", {})}
        />

        <button
          className="my-2 bg-purple-900 rounded-md px-1 w-[80%] py-1 cursor-pointer"
          type="submit"
        >
            Submit
        </button>
      </form>
    </div>
  );
}

export default Contatform;
