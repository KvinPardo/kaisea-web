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
      <div className="section" name="kai">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="container mx-auto flex flex-col justify-center items-center "
        >
          <motion.h3
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="lg:text-5xl uppercase text-xl text-[#FFC000] font-semibold"
          >
            {title}
          </motion.h3>

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
