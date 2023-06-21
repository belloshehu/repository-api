import Repo from "@/app/components/Repo";
import React from "react";
import { repoProp } from "./models";
import { resolve } from "path";

const getrepos = async () => {
  const response = await fetch(
    "https://api.github.com/users/belloshehu/repos",
    {}
  );
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await getrepos();
  return (
    <section className="flex flex-col gap-4 items-center">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-bl from-slate-800 to-cyan-600 text-2xl font-semiblod lg:font-extrabold lg:text-4xl">
        Repositories
      </h1>
      {repos.map((repo: repoProp) => (
        <Repo key={repo.name} repo={repo} />
      ))}
    </section>
  );
};

export default ReposPage;
