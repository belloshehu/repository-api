import React from "react";
import { Righteous } from "next/font/google";
import { repoProp } from "../code/repos/models";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import Link from "next/link";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Repo = ({ repo }: { repo: repoProp }) => {
  return (
    <div className="bg-slate-100 hover:bg-white hover:shadow-2xl shadow-md flex flex-col gap-2 p-2 lg:p-5 w-full md:w-1/2 group hover:scale-y-125 hover:scale-x-105 duration-200 transition-all">
      <h3
        className={`${righteous.className} font-semibold text-transparent bg-clip-text bg-gradient-radial from-cyan-600 to-yellow-700 text-xl`}>
        {repo.name.toUpperCase()}
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-between lg:justify-start gap-10 text-black mt-5">
        <span className="flex gap-1 items-center">
          <FaStar />
          {repo.forks_count}
        </span>
        <span className="flex gap-1 items-center">
          <FaCodeBranch />
          {repo.watchers_count}
        </span>
        <span className="flex gap-1 items-center">
          <FaEye />
          {repo.stargazers_count}
        </span>
      </div>
      <Link
        href={`/code/repos/${repo.name}`}
        className={`p-2 px-6 bg-gradient-to-tr from-cyan-600 via-blue-400 to-amber-600 max-w-fit my-2 text-white rounded-md shadow-md group-hover:bg-gradient-radial transition-all duration-200`}>
        Details
      </Link>
    </div>
  );
};

export default Repo;
