import Image from "next/image";
import React from "react";
import Link from "./Link";
import HeaderTitle from "./HeaderTitle";

const FeatureDescription = ({ image }: { image: string }) => {
  return (
    <div className="grid gap-4 sm:grid-rows-1 sm:grid-cols-[1fr,1fr] sm:items-center md:gap-12 lg:gap-16">
      <Image
        src={image}
        className="w-full h-auto rounded-md md:max-w-md"
        width={900}
        height={900}
        alt="project image"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-extrabold">Ecommerce</h3>
        <h4 className="font-semibold text-md">React, Node, MongoDb</h4>
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officia
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          molestiae a aliquid commodi, facilis possimus autem praesentium,
          labore nemo iure quam architecto temporibus tempora veritatis
          blanditiis ut nostrum nisi porro!
        </p>
        <Link href="#" className="w-fit mt-2">
          View Demo
        </Link>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="padding-container">
      <HeaderTitle word1="Featured" word2="projects" />
      <div className="flex flex-col gap-16">
        <FeatureDescription image="/demo.jpg" />
        <FeatureDescription image="/demo.jpg" />
        <FeatureDescription image="/demo.jpg" />
      </div>
    </div>
  );
};

export default Featured;
