import { Righteous } from "next/font/google";
import Link from "next/link";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header className="flex gap-20 p-5 lg:px-10 bg-gradient-to-tr from-orange-700 via-blue-600 to-indigo-500">
      <div className="border-2 p-1 rounded-md">
        <h1
          className={`${righteous.className} font-bold text-xl text-white lg:text-3xl `}>
          Reposit
        </h1>
      </div>
      <nav className="list-none flex gap-5 items-center">
        <li>
          <Link href={"/repos"} className="p-2 px-5 text-white hover:underline">
            Repos
          </Link>
        </li>
        <li>
          <Link href={"/repos"} className="p-2 px-5 text-white hover:underline">
            About
          </Link>
        </li>
      </nav>
    </header>
  );
}
