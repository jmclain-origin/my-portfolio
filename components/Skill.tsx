import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/exghybvcvdmerns27fff"
        className="rounded-full border border-gray-500 object-cover w-24px h-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white w-24px h-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
    </div>
  );
};

export default Skill;