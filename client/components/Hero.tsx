import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

const Hero = ({}: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Aldo Marcelino",
      "Guy-who-love-Tea.tsx?",
      "<ButLovesProblem-Solving />",
      "[InfiniteCoding, LifeTimeLearning]",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col space-y-8  items-center justify-center text-center overflow-hidden ">
      <div className="mt-[120px]">
        <BackgroundCircles />
      </div>
      <div className="relative rounded-full h-32 w-32 mx-auto z-10">
        <Image
          className="object-cover rounded-full"
          src="/assets/img/IMG_20180817_130019.jpg"
          alt="Aldo Marcelino"
          fill
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Engineer
        </h2>
        <h1 className="text-xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#BB86FC" />
        </h1>
        <div className="pt-5 flex gap-2 justify-center">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
