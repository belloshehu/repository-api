import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import Repo from "@/app/components/Repo";
import React from "react";
import { Righteous } from "next/font/google";
import RepoDirs from "@/app/components/RepoDirs";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const getSingleRepo = async (name: string) => {
  const response = await fetch(
    `https://api.github.com/repos/belloshehu/${name}`,
    {}
  );

  const repo = await response.json();
  return repo;
};

type repoPageProp = {
  name: string;
};

const RepoPage = async ({ params: { name } }: { params: repoPageProp }) => {
  const repo = await getSingleRepo(name);
  return (
    <>
      <div className="p-5 lg:px-20 flex flex-col gap-5">
        <h3
          className={`${righteous.className} font-semibold text-transparent bg-clip-text bg-gradient-radial from-cyan-600 to-yellow-700 text-xl lg:text-4xl`}>
          {repo.name.toUpperCase()}
          <sup className="text-sm px-2 text-blue-500">{repo.visibility}</sup>
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
          href={`/code/repos`}
          className={`p-2 px-6 bg-gradient-to-tr from-cyan-600 via-blue-400 to-amber-600 max-w-fit my-2 text-white rounded-md shadow-md group-hover:bg-gradient-radial transition-all duration-200`}>
          Go back
        </Link>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={name} />
      </div>
    </>
  );
};

export default RepoPage;
