import React from "react";
import { company } from "../data";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Company = () => {
  // Destructure company
  const { title, subtitle, text, image, items } = company;
  // const { imageSecond, itemsSecond } = companySecond;

  return (
    <>
      <div className="section lg:pt-20 lg:pb-40">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="container mx-auto flex flex-col justify-center items-center "
        >
          <motion.h1
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="lg:text-4xl uppercase text-xl text-[#FFC000]"
          >
            {title}
          </motion.h1>
          
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="text-center lg:px-18 text-[16px] lg:pt-8"
          >
            {text}
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Company;
