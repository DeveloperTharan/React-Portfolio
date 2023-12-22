import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Projects } from './constant'

function Details() {

  return (
    <div className="flex flex-row flex-wrap gap-x-5 gap-y-10 justify-center items-center">
      {Projects.map((project) => (
        <Card className="mt-6 w-[18rem] bg-purple-900/90">
          <CardHeader color="blue-gray" className="relative h-40">
            <img
              src={project.Image}
              alt="card-image"
              className="object-cover object-left-top"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-white"
            >
              {project.projectname}
            </Typography>
            <Typography className="text-sm text-white">
              {project.description}
            </Typography>
            <div className="mt-2">{project.Tech_Stakes}</div>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between items-center">
            <a href={project.github} className="text-blue-600">GitHub</a>
            <a href={project.livedemo} className="text-blue-600">LiveDemo</a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Details;
