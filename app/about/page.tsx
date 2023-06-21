import React from "react";

export const metadata = {
  title: "About us",
  description: "We are leaders in web dev, mobile dev and many more areas",
};
const AboutPage = () => {
  return (
    <div className="text-center flex flex-col items-center gap-5 justify-center w-full lg:w-1/3 m-auto">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-bl from-slate-800 to-cyan-600 text-2xl font-semiblod lg:font-extrabold lg:text-4xl">
        About us
      </h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsa
        maxime minus facere ipsum expedita veritatis enim consectetur obcaecati
        asperiores vero necessitatibus iure, iusto veniam. Quis consectetur
        repudiandae fugiat blanditiis.
      </p>
    </div>
  );
};

export default AboutPage;
