import React from "react";
import HeaderTitle from "./HeaderTitle";
import ProjectDescription from "./ProjectDescription";
import { projects } from "@/data/ProjectsData";

const Featured = () => {
  const projectsList = Object.keys(projects);
  return (
    <div className="padding-container" id="featured">
      <HeaderTitle word1="Featured" word2="projects" />
      <div className="flex flex-col gap-16">
        {projectsList.map((project, index) => (
          <ProjectDescription
            project={projects[project]}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
