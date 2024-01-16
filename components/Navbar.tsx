import Image from "next/image";
import React from "react";
import Link from "./Link";
import { ArrowUpRight } from "iconoir-react";

interface Link {
  href: string;
  title: string;
  target?: boolean;
  icon?: boolean;
}

interface LinksData {
  [key: string]: Link;
}

const Navbar = ({ linksData }: { linksData: LinksData }) => {
  const links = Object.keys(linksData);
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
          {links.map((link: string, index) => {
            const {
              href,
              title,
              target = false,
              icon = false,
            } = linksData[link];
            return (
              <>
                <Link
                  href={href}
                  className="uppercase text-sm lg:text-md"
                  key={index}
                  target={target ? "_blank" : ""}
                >
                  {icon ? (
                    <div className="flex flex-row">
                      {title}
                      <ArrowUpRight width={10} strokeWidth={3} />
                    </div>
                  ) : (
                    title
                  )}
                </Link>
              </>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
