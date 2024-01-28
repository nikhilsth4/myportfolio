import { projects } from "@/data/ProjectsData";
import HeaderTitle from "@/components/HeaderTitle";
import HorizontalLine from "@/components/HorizontalLine";
import Link from "@/components/Link";
import Navbar from "@/components/Navbar";
import { WorksLinks } from "@/data/data";
import Image from "next/image";
import React from "react";

const WorkDescription = ({ params }: { params: { slug: string } }) => {
  const param: string = params.slug;
  const project = projects[param];
  if (!project) return;
  const { contents } = project;

  return (
    <>
      <Navbar linksData={WorksLinks} />
      <div className="padding-container space-y-16">
        <HeaderTitle
          word1={project.title.word1}
          word2={project.title.word2}
          className="mt-12"
        />

        <p>
          Technologies Used : <b>{project.techStack}</b>
        </p>

        {contents &&
          contents.map((content, index) => {
            const { description, image, link } = content;
            return (
              <div key={index} className="">
                <p>
                  {description}
                  {link && <Link href={link.href}>{link.title}</Link>}
                </p>
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt || "image"}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-md my-6"
                  />
                )}
              </div>
            );
          })}
      </div>
      <HorizontalLine className="mb-0" />
    </>
  );
};

export default WorkDescription;
