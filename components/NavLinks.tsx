import React from "react";
import Link from "./Link";
import { ArrowUpRight } from "iconoir-react";
import { LinksData } from "@/types";

const NavLinks = ({
  links,
  linksData,
}: {
  links: string[];
  linksData: LinksData;
}) => {
  return (
    <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
      {links.map((link: string, index) => {
        const { href, title, target = false, icon = false } = linksData[link];
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
  );
};

export default NavLinks;
