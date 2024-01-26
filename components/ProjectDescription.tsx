import Image from "next/image";
import React from "react";
import Link from "./Link";
import { Project, ProjectLinks } from "@/data/ProjectsData";

const Links = ({ links }: { links: ProjectLinks }) => {
  const linkKeys = Object.keys(links);
  return (
    <>
      {linkKeys.map(
        (link: string, index) =>
          links[link] && (
            <div key={index}>
              <Link
                href={links[link] || "#"}
                className="w-fit mt-2 capitalize"
              >
                View {link}
              </Link>
            </div>
          )
      )}
    </>
  );
};

const ProjectDescription = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  console.log(index);
  return (
    <div
      className={`grid gap-4 sm:grid-rows-1 sm:grid-cols-[1fr,1fr] sm:items-center md:gap-12 lg:gap-16`}
    >
      <Image
        src={project.thumbnail}
        className={`w-full h-auto rounded-md md:max-w-md sm:-order-1`}
        width={900}
        height={900}
        alt="project image"
      />
      <div
        className={`flex flex-col gap-2 ${
          index % 2 === 0 ? "sm:order-last" : "sm:order-first"
        }`}
      >
        <h3 className="text-lg font-extrabold">{`${project.title.word1} ${project.title.word2}`}</h3>
        <h4 className="font-semibold text-md">{project.techStack}</h4>
        <p className="mt-4 font-light">{project.description}</p>
        <Links links={project.links} />
      </div>
    </div>
  );
};

export default ProjectDescription;
// Project;
