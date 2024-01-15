import Image from "next/image";
import React from "react";
import Link from "./Link";

const Featured = ({ image }: { image: string }) => {
  return (
    <div className="grid grid-rows-2 gap-4 sm:grid-rows-1 sm:grid-cols-[1fr,1fr] sm:items-center ">
      <Image
        src={image}
        className="w-full h-auto rounded-md"
        width={40}
        height={40}
        alt="project image"
      />
      <div className="flex flex-col gap-2 sm:flex-2">
        <h4 className="text-lg font-extrabold">Ecommerce</h4>
        <h6 className="font-semibold text-md">React, Node, MongoDb</h6>
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

export default Featured;
