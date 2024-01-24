export const Skills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
      <div className="w-44 h-48 px-2 py-3 bg-[#14131a] rounded-lg shadow-2xl">
        <h1 className="font-medium">Programming</h1>
        <div className="flex flex-row flex-wrap flex-grow justify-start items-center my-2 gap-3">
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-blue-800">
            Java
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-yellow-800">
            JavaScript
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-green-800">
            TypeScript
          </span>
        </div>
      </div>
      <div className="w-44 h-48 px-2 py-3 bg-[#14131a] rounded-lg shadow-2xl">
        <h1 className="font-medium">FrontEnd</h1>
        <div className="flex flex-row flex-wrap flex-grow justify-start items-center my-2 gap-3">
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            HTML5
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            CSS3
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            BootStrap
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-blue-800">
            Tailwindcss
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            Sass
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            Javascript
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-yellow-800">
            ReactJs
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-green-800">
            NextJs
          </span>
        </div>
      </div>
      <div className="w-44 h-48 px-2 py-3 bg-[#14131a] rounded-lg shadow-2xl">
        <h1 className="font-medium">DataBase</h1>
        <div className="flex flex-row flex-wrap flex-grow justify-start items-center my-2 gap-3">
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-blue-800">
            MySQL
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            GraphQL
          </span>
        </div>
      </div>
      <div className="w-44 h-48 px-2 py-3 bg-[#14131a] rounded-lg shadow-2xl">
        <h1 className="font-medium">Dev-Tools</h1>
        <div className="flex flex-row flex-wrap flex-grow justify-start items-center my-2 gap-3">
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            Git
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-yellow-800">
            GitHub
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md">
            FireBase
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-blue-800">
            Convex
          </span>
          <span className="px-2 py-[3px] text-tiny bg-[#1c1b23] rounded-md border border-green-800">
            Clerk
          </span>
        </div>
      </div>
    </div>
  );
};
