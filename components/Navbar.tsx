import Image from "next/image";
import React from "react";
import Link from "./Link";

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
        <div className="flex gap-4 md:gap-8">
          <Link href="#" className="uppercase text-sm lg:text-md">
            home
          </Link>
          <Link href="#" className="uppercase text-sm lg:text-md">
            work
          </Link>
          <Link href="#" className="uppercase text-sm lg:text-md">
            contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
