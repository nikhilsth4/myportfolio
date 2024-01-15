import Image from "next/image";
import React from "react";
import Link from "./Link";
import { ArrowUpRight } from "iconoir-react";
import { links } from "@/data";

const Navbar = () => {
  return (
    <header className="padding-container">
      <nav className="py-4 flex flex-col items-center md:flex-row md:justify-between ">
        <Image
          src="/logo.svg"
          alt="logo logo"
          className="w-20 h-auto items-center"
          width={40}
          height={20}
        />
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          <Link href="#" className="uppercase text-sm lg:text-md">
            home
          </Link>
          <Link href="#work" className="uppercase text-sm lg:text-md">
            Featured
          </Link>

          <Link href="#contact" className="uppercase text-sm lg:text-md">
            contact
          </Link>

          <Link href="#" className="uppercase text-sm lg:text-md">
            Works
          </Link>
          <Link
            href={links.resume}
            className="uppercase text-sm lg:text-md"
            target="_blank"
          >
            <div className="flex flex-row">
              resume
              <ArrowUpRight width={10} strokeWidth={3} />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
