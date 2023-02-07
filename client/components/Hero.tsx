import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Aldo Marcelino",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col space-y-8  items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover z-10"
        src="https://images.unsplash.com/photo-1672730960862-aa15afabf917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="Aldo Marcelino"
      />
      <div className="z-20" >
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about" >
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience" >
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills" >
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects" >
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
