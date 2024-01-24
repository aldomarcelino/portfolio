import { motion } from "framer-motion";
import React from "react";

type Props = {
  diractionLeft?: boolean;
};
const Skill = ({ diractionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: diractionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
        className="border rounded-full border-gray-500 object-cover w-16 h-16  xl:w-20 xl:h-20 filter group-hover:grayscale duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex justify-center h-full items-center">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
