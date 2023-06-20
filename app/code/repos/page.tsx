import Repo from "@/app/components/Repo";
import React from "react";
import { repoProp } from "./models";

const getrepos = async () => {
  const response = await fetch(
    "https://api.github.com/users/belloshehu/repos",
    {}
  );
  const repos = await response.json();
  console.log(repos);
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
        <Repo repo={repo} />
      ))}
    </section>
  );
};

export default ReposPage;
