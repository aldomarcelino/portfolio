import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {};

const Header = ({}: Props) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Media Icon */}
        <SocialIcon
          url="https://www.youtube.com/sonnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/aldo-marcelino-791bb5211/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/sonnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        onClick={() => router.push("/#contact")}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
