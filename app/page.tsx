"use client";
import Link from "next/link";
import SlickSlider from "./components/SlickSlider";

export default function Home() {
  return (
    <div className="text-center flex flex-col gap-6 justify-center items-center lg:w-2/5 w-full mx-auto">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-bl from-slate-800 to-cyan-600 text-2xl font-semiblod lg:font-extrabold lg:text-4xl">
        Welcome to reposit
      </h1>

      <p className="">What are you interested in?</p>
      <section className="flex justify-around w-full bg-gradient-to-tr flex-col lg:flex-row gap-10 lg:gap-5 from-cyan-300 to-slate-400 p-10 rounded-md shadow-lg">
        <Link className="" href={"/course"}>
          <h3 className="text-xl text-transparent underline  bg-clip-text bg-gradient-to-bl from-orange-500 to-cyan-800">
            Courses
          </h3>
          <p>Interesting tech courses</p>
        </Link>
        <Link className="" href={"/code/repos"}>
          <h3 className="text-xl text-transparent underline bg-clip-text bg-gradient-to-bl from-orange-500 to-cyan-800">
            Code{" "}
          </h3>
          <p>Beautifully developed codes</p>
        </Link>
      </section>

      <h2 className="text-xl font-bold mt-10">What users say about us</h2>
      <SlickSlider />
    </div>
  );
}
