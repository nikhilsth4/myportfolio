import Image from "next/image";
import React from "react";
import { Github, Linkedin } from "iconoir-react";

const Hero = () => {
  return (
    <main className="my-16 w-full padding-container md:grid md:grid-cols-[1fr,1fr] md:place-items-center lg:place-items-end ">
      <div className="">
        <h1 className="text-3xl mb-4 lg:text-4xl lg:mb-10">
          Hello, 👋
          <br /> I am <span className="font-bold">Nikhil Shrestha</span>
        </h1>
        <p className="text-md">
          quae porro ipsam asperiores nisi beatae culpa modi minima at
          dignissimos non fuga. Rerum libero pariatur, obcaecati, culpa dicta
          recusandae nesciunt dolorem quo fuga, provident dolores optio quidem
          officia facilis molestias dolore tempore facere doloribus blanditiis
          tenetur dolorum voluptatibus perferendis. Officia, voluptates commodi.
        </p>
        <div className="flex gap-4 mt-8 items-center md:mt-12">
          <a href="#" aria-label="Link to github">
            <Github className="w-10 h-10 hover:stroke-2 hover:scale-125" />
          </a>
          <a href="#" aria-label="Link to linkedin">
            <Linkedin className="w-10 h-10 hover:stroke-2 hover:scale-125" />
          </a>
        </div>
      </div>
      <Image
        src="/profile.jpg"
        alt="profile photo"
        className="w-full h-auto rounded-md hidden md:block md:max-w-xs md:place-content-end lg:max-w-sm"
        width={900}
        height={900}
      />
    </main>
  );
};

export default Hero;
