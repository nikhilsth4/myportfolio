import HeaderTitle from "@/components/HeaderTitle";
import HorizontalLine from "@/components/HorizontalLine";
import Navbar from "@/components/Navbar";
import ProjectDescription from "@/components/ProjectDescription";
import { WorksLinks } from "@/data";

export default function Works() {
  return (
    <>
      <Navbar linksData={WorksLinks} />
      <div className="padding-container mt-10">
        <HeaderTitle word1="React" word2="projects" />
        <div className="flex flex-col gap-16">
          <ProjectDescription image="/demo.jpg" />
          <ProjectDescription image="/demo.jpg" />
          <ProjectDescription image="/demo.jpg" />
        </div>
      </div>
      <HorizontalLine className="mb-0" />
    </>
  );
}
