import React, { useState } from "react";
import { valores } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Cards = () => {
  const [index, setIndex] = useState(1);
  // Destructure products

  return (
    <motion.div
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      whileInView={"show"}
      className="flex flex-col gap-y-[30px] lg:flex-row  lg:gap-x-[30px] w-full justify-between mt-20"
    >
      {valores.map((card, cardIndex) => {
        const { title, subtitle, image } = card;

        return (
          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1.1)}
            onClick={() => setIndex(cardIndex)}
            key={cardIndex}
            className={`${
              index === cardIndex
                ? "bg-[#d6ffc4] scale-105 text-primary"
                : "bg-white"
            } border-[1px] border-secondary h-auto w-full flex flex-col lg:px-[60px] py-7 gap-y-4 text-center cursor-pointer `}
          >
            {/* card icon */}
            <motion.div 
            variants={fadeIn("down", "tween", 0.4, 1.2)}
              className="flex justify-center items-center w-full">
              <img
                src={`/img/${image}.png`}
                alt="imagen-icono"
                className="w-[80px] h-[80px]"
              />
            </motion.div>
            {/* card title */}
            <motion.div 
              className="font-medium text-black text-[16px] flex flex-col gap-y-7 px-4 lg:px-0">
              <motion.h3
                variants={fadeIn("up", "tween", 0.4, 1.3)}
                className="lg:text-[21px]">{title}</motion.h3>
              <motion.p
                variants={fadeIn("right", "tween", 0.4, 1.4)}
                className="font-light">{subtitle}</motion.p>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Cards;
