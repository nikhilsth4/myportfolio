import Image from "next/image";
import React from "react";
import Link from "./Link";
import { Project } from "@/data/ProjectsData";

const ProjectDescription = ({ project }: { project: Project }) => {
  return (
    <div
      className={`grid gap-4 sm:grid-rows-1 sm:grid-cols-[1fr,1fr] sm:items-center md:gap-12 lg:gap-16`}
    >
      <Image
        src={project.thumbnail}
        className="w-full h-auto rounded-md md:max-w-md"
        width={900}
        height={900}
        alt="project image"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-extrabold">{`${project.title.word1} ${project.title.word2}`}</h3>
        <h4 className="font-semibold text-md">{project.techStack}</h4>
        <p className="mt-4 font-light">{project.description}</p>
        {project.links.detail && (
          <Link href={project.links.detail} className="w-fit mt-2">
            View Detail
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
// Project;
