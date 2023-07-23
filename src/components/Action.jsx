import React from "react";
import { action } from "../data";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fadeIn, staggerContainer } from "../variants";
import { motion } from "framer-motion";

const Action = () => {
  return (
    <section className="section lg:bg-wave bg-center bg-no-repeat bg-cover w-full h-full my-20 px-3">
      <div className="container mx-auto">
        {action.map((action, index) => {
          // Destructure
          const { image, title, text2, btnText } = action;
          return (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row lg:items-start lg:gap-x-[40px]"
              variants={staggerContainer(0.3, 1)}
              initial="hidden"
              whileInView={"show"}
            >
              {/* text */}
              <motion.div 
                variants={fadeIn("down", "tween", 0.4, 1.5)}
                className="flex-1 my-8">
                <motion.h3 
                  variants={fadeIn("down", "tween", 0.4, 1.5)}
                  className=" text-primary text-[18px] lg:text-3xl mb-4 lg:mt-0">
                  {title}
                </motion.h3>
                <motion.h2 
                  variants={fadeIn("left", "tween", 0.4, 1.5)}
                  className="text-primary lg:text-xl text-[17px]">{text2}</motion.h2>
                <Link
                  to="/productos"
                  name="productos"
                  className="border border-primary w-[200px] py-3 mt-5 flex justify-center items-center gap-x-3 group hover:bg-primary  hover:text-white"
                >
                  {btnText}{" "}
                  <FiChevronRight className="group-hover:translate-x-2 transition-all duration-200" />
                </Link>
              </motion.div>
              {/* image */}
              <motion.div 
                variants={staggerContainer(0.5, 1.2)}
                initial="hidden"
                whileInView={"show"}
                className="flex-1 flex justify-center items-center">
                <motion.img
                  src={`/img/${image}.jpg`}
                  alt=""
                  className="h-full shadow-2xl"
                  variants={fadeIn("left", "tween", 0.4, 1.5)}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Action;
