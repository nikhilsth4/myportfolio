import Image from "next/image";
import React from "react";
import Link from "./Link";
import HeaderTitle from "./HeaderTitle";
import ProjectDescription from "./ProjectDescription";



const Featured = () => {
  return (
    <div className="padding-container" id="featured">
      <HeaderTitle word1="Featured" word2="projects" />
      <div className="flex flex-col gap-16">
        <ProjectDescription image="/demo.jpg" />
        <ProjectDescription image="/demo.jpg" />
        <ProjectDescription image="/demo.jpg" />
      </div>
    </div>
  );
};

export default Featured;
