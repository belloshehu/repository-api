import { link } from "fs";
import { contentType } from "../code/repos/models";
import Link from "next/link";
import { FaFolder } from "react-icons/fa";

async function getDirs(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/belloshehu/${name}/contents`,
    {
      next: {
        revalidate: 60 * 60, // refetch every 1 hour
      },
    }
  );
  const contents = await response.json();
  return contents;
}

type repoDirProp = string;

const RepoDirs = async ({ name }: { name: repoDirProp }) => {
  const contents = await getDirs(name);
  const dirs = contents.filter(
    (content: contentType) => content.type === "dir"
  );

  return (
    <div>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-bl from-slate-800 to-cyan-600 text-xl font-semiblod lg:font-bold lg:text-2xl">
        Directories
      </h2>
      {dirs.length > 0 ? (
        <ul className="list-disc pl-5 text-slate-700">
          {dirs.map((dir: { path: string }) => (
            <li key={dir.path} className="flex gap-1 items-center">
              <FaFolder />
              <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-3">
          <p>No directories in this repository</p>
        </div>
      )}
    </div>
  );
};

export default RepoDirs;
