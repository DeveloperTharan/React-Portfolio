import { Projects } from "../../constants/project-constant";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";
import { useRef } from "react";

export const ProjectCard = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      var slider = sliderRef.current;
      slider.scrollLeft -= 350;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      var slider = sliderRef.current;
      slider.scrollLeft += 350;
    }
  };

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
        ref={sliderRef}
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
