import Featured from "@/components/Featured";
import HorizontalLine from "@/components/HorizontalLine";
import Link from "@/components/Link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="px-4 md:px-8">
        <nav className="py-4 flex flex-col items-center md:flex-row md:justify-between ">
          <Image
            src="/logo.svg"
            alt="logo logo"
            className="w-20 h-auto items-center"
            width={40}
            height={20}
          />
          <div className="flex gap-4 md:gap-8">
            <Link href="#" className="uppercase text-sm">
              home
            </Link>
            <Link href="#" className="uppercase text-sm">
              work
            </Link>
            <Link href="#" className="uppercase text-sm">
              contact
            </Link>
          </div>
        </nav>
      </header>
      <main className="my-16  padding-container">
        <h1 className=" text-3xl mb-4">
          Hello, 👋
          <br /> I am <span className="font-bold">Nikhil Shrestha</span>
        </h1>
        <p>
          quae porro ipsam asperiores nisi beatae culpa modi minima at
          dignissimos non fuga. Rerum libero pariatur, obcaecati, culpa dicta
          recusandae nesciunt dolorem quo fuga, provident dolores optio quidem
          officia facilis molestias dolore tempore facere doloribus blanditiis
          tenetur dolorum voluptatibus perferendis. Officia, voluptates commodi.
        </p>
        <div className="flex gap-4 mt-8 items-center">
          <Image
            src="/github.svg"
            alt="github logo"
            className="w-10"
            width={40}
            height={10}
          />
          <Image
            src="/linkedin.svg"
            alt="linkedin logo"
            className="w-10"
            width={40}
            height={10}
          />
        </div>
      </main>
      <HorizontalLine />
      <div className="padding-container">
        <div className="mb-16">
          <Link href="#" className="pb-3 text-2xl">
            <h2 className="font-light inline">
              Featured <span className="font-extrabold ml-1">projects</span>
            </h2>
          </Link>
        </div>
        <div className="flex flex-col gap-16">
          <Featured image="/demo.jpg" />
          <Featured image="/demo.jpg" />
          <Featured image="/demo.jpg" />
        </div>
      </div>
      <HorizontalLine className="bg-secondary" />
      <div className="padding-container">
        <div className="mb-16">
          <Link href="#" className="pb-1 text-2xl">
            <h2 className="font-normal inline">
              Contact <span className="font-extrabold ml-1">me</span>
            </h2>
          </Link>
          <p className="mt-8">
            Are you interested in collaborating or want to connect or chat?
            Contact me via
            <Link href="#" className="inline-block mx-1">
              LinkedIn
            </Link>
            or
            <Link href="#" className="inline-block mx-1">
              Email me
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
