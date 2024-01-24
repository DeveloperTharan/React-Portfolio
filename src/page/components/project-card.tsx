import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const ProjectCard = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft - 350;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft + 350;
  };

  const Projects = [
    {
      id: 1,
      name: "Udemy Clone",
      techstacks:
        "NextJs, Tailwindcss, NextUi, Postgres db, Clerk auth, Prisma ORM, Zod, UplodeThings.",
      image: "/udemy.webp",
      github: "https://github.com/DeveloperTharan/udemy-clone",
      livedemo: "/",
    },
    {
      id: 2,
      name: "DropBox Clone",
      techstacks:
        "NextJs, Tailwindcss, Shadcn/ui, Convex db, Clerk auth, Edgestore.",
      image: "/Dropbox.svg",
      github: "https://github.com/DeveloperTharan/Dropbox-Clone",
      livedemo: "https://dropbox-clone-gray.vercel.app",
    },
    {
      id: 3,
      name: "Notion Clone",
      techstacks:
        "NextJs, Tailwindcss, DasiUi, Convex db, Clerk auth, Edgestore.",
      image: "/notion.svg",
      github: "https://github.com/DeveloperTharan/Notion-clone",
      livedemo: "https://notion-clone-six-sooty.vercel.app",
    },
    {
      id: 4,
      name: "ebay Clone",
      techstacks:
        "NextJs, Tailwindcss, Shadcn/ui, Postgres db, Clerk auth, Prisma ORM, Zod.",
      image: "/ebay.webp",
      github: "https://github.com/DeveloperTharan/eBay-clone",
      livedemo: "/",
    },
    {
      id: 5,
      name: "Netflix Clone",
      techstacks: "ReactJs, Redux, Tailwindcss, Firebase auth, TMDB API.",
      image: "/netflix.webp",
      github: "https://github.com/DeveloperTharan/Netflix-clone",
      livedemo: "https://netflix-clone-eight-fawn.vercel.app",
    },
    {
      id: 6,
      name: "Coiner Crypto",
      techstacks: "ReactJs, Tailwindcss, Material Tailwind, Rapied API.",
      image: "/coiner.webp",
      github: "https://github.com/DeveloperTharan/coiner",
      livedemo: "https://coiner-gamma.vercel.app",
    },
  ];

  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        size={25}
        className="border border-white text-white z-30 rounded-full hover:bg-green-600
        hover:text-white hover:border-green-600 cursor-pointer absolute right-8 -top-10
        transition duration-150 ease-linear hidden lg:block"
        onClick={slideLeft}
      />
      <div
        id={"slider"}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {Projects.map((item, index) => (
          <div key={index} className="aspect-[16/9] inline-block mx-1.5">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none bg-black group cursor-pointer"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover aspect-[16/9] w-96"
                src={item.image}
              />
              <CardFooter
                className="hidden group-hover:flex flex-col gap-1.5 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 
                absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition duration-300 delay-150
                ease-in-out"
              >
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="text-lg font-medium text-white/80">
                    {item.name}
                  </p>
                  <div className="flex flex-row gap-x-1">
                    <Button
                      className="text-tiny text-white bg-black/40"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      <Link
                        href={item.github}
                        target="_blank"
                        className="text-white"
                      >
                        soure code
                      </Link>
                    </Button>
                    <Button
                      className="text-tiny text-white bg-black/40"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      <Link
                        href={item.livedemo}
                        target="_blank"
                        className="text-white"
                      >
                        Live
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-tiny text-white text-wrap text-start mr-auto">
                  {item.techstacks}
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <MdChevronRight
        size={25}
        className="border border-white text-white z-30 rounded-full hover:bg-green-600
        hover:text-white hover:border-green-600 cursor-pointer absolute right-0 -top-10
        transition duration-150 ease-linear hidden lg:block"
        onClick={slideRight}
      />
    </div>
  );
};
