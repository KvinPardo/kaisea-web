import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { hero } from "../data";
import Video from "/img/peces.mp4";
import { Link } from "react-scroll";

const Hero = () => {
  //  Destructure hero data
  const { title, buttonText, pretitle } = hero;

  return (
    <div className="">
      <div className="w-full h-full">
        <video
          className="w-full lg:h-[900px] object-cover h-[700px]"
          autoPlay
          loop
          muted
          src={Video}
        ></video>
        <motion.div
          variants={staggerContainer(0, 1)}
          initial="hidden"
          whileInView={"show"}
          className="container mx-auto relative"
        >
          <motion.div
            variants={fadeIn("down", "tween", 0.1, 1.2)}
            className="absolute lg:top-[-450px] top-[-300px] left-0 flex flex-col justify-center items-center w-full h-full px-4 gap-y-8"
          >
            <motion.h1
              variants={fadeIn("down", "tween", 0.2, 1.3)}
              className="text-white lg:text-4xl text-3xl tracking-widest font-bold uppercase w-full text-center "
            >
              {pretitle}
            </motion.h1>
            <motion.h3
              variants={fadeIn("right", "tween", 0.3, 1.4)}
              className="text-[#FFC000] uppercase lg:text-[65px] tracking-wider w-full text-center font-bold text-2xl "
            >
              KAI
            </motion.h3>
            <motion.h3
              variants={fadeIn("right", "tween", 0.4, 1.2)}
              className="text-white uppercase lg:text-4xl tracking-wider w-full text-center font-bold text-2xl "
            >
              {title}
            </motion.h3>

            <Link
              to="kai"
              offset={-80}
              smooth={true}
              duration={500}
              variants={fadeIn("right", "tween", 0.4, 1.2)}
              className="text-white text-xl px-[120px] py-2 cursor-pointer border hover:bg-secondary hover:border-secondary transition-all duration-300"
            >
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
