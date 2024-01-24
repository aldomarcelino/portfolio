import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const WorkExperience = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="mt-32 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#BB86FC]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;