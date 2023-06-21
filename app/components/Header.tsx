"use client";
import NaveLink from "./NaveLink";
import { Righteous } from "next/font/google";
import Link from "next/link";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const links = [
  {
    linkText: "Repos",
    path: "/code/repos",
  },
  {
    linkText: "About",
    path: "/about",
  },
  {
    linkText: "Courses",
    path: "/courses",
  },
];
export default function Header() {
  return (
    <header className="flex gap-20 p-5 lg:px-10 bg-gradient-to-tr from-orange-700 via-blue-600 to-indigo-500">
      <div className="border-2 p-1 rounded-md">
        <Link href={"/"}>
          <h1
            className={`${righteous.className} font-bold text-xl text-white lg:text-3xl `}>
            Reposit
          </h1>
        </Link>
      </div>
      <nav className="list-none flex gap-5 items-center">
        {links.map((link) => (
          <NaveLink {...link} key={link.path} />
        ))}
      </nav>
    </header>
  );
}
