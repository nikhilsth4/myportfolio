import Link from "next/link";
import React, { ReactElement } from "react";

const CustomLink = ({
  href = "#",
  className = "",
  children,
  target = "",
}: {
  href: string;
  className?: string;
  children: ReactElement | string | string[];
  target?: string;
}) => {
  return (
    <a
      href={href}
      className={`font-bold border-b-2 border-dotted hover:border-solid hover:scale-110 ${className}`}
      target={target}
    >
      {children}
    </a>
  );
};

export default CustomLink;
