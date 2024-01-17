import Image from "next/image";
import React from "react";
import Link from "./Link";
import { ArrowUpRight } from "iconoir-react";
import NavLinks from "./NavLinks";
import { LinksData } from "@/types";

const Navbar = ({ linksData }: { linksData: LinksData }) => {
  const links = Object.keys(linksData);
  return (
    <header className="padding-container">
      <nav className="py-4 flex flex-col items-center md:flex-row md:justify-between ">
        <a href="/" aria-label="Logo of Nikhil">
          <Image
            src="/logo.svg"
            alt="logo logo"
            className="w-20 h-auto items-center"
            width={40}
            height={20}
          />
        </a>
        <NavLinks links={links} linksData={linksData} />
      </nav>
    </header>
  );
};

export default Navbar;
