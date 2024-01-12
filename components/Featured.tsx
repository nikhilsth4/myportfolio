import Image from "next/image";
import React from "react";
import Link from "./Link";

const Featured = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={image}
        className="w-full h-auto rounded-md"
        width={40}
        height={40}
        alt="project image"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-extrabold">Ecommerce</h4>
        <h6 className="font-semibold text-md">React, Node, MongoDb</h6>
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officia
          tenetur quibusdam dicta ipsum hic amet ipsa est voluptatum repellendus
          asperiores aut, placeat nobis temporibus quidem suscipit labore at
          delectus?
        </p>
        <Link href="#" className="w-fit mt-2">
          View Demo
        </Link>
      </div>
    </div>
  );
};

export default Featured;
