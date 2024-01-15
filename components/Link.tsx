import React, { ReactElement } from "react";

const Link = ({
  href = "#",
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactElement | string;
}) => {
  return (
    <a
      href={href}
      className={`font-bold border-b-2 border-dotted hover:border-solid hover:scale-110 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
