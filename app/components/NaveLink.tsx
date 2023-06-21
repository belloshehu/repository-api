import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NaveLink = ({ linkText, path }: { linkText: string; path: string }) => {
  const pathName = usePathname();
  const arr = pathName.split("/");
  const currentPath = arr[arr.length - 1]; // the current path,  e.g: repos
  console.log(currentPath, linkText);
  return (
    <li>
      <Link
        href={path}
        className={` text-white hover:underline ${
          linkText.toLowerCase() === currentPath.toLowerCase()
            ? "border-b-4 border-white"
            : ""
        }`}>
        {linkText}
      </Link>
    </li>
  );
};

export default NaveLink;
