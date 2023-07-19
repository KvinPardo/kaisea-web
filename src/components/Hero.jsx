import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { hero } from "../data";
import Video from "/img/algas.mp4";
import { Link } from "react-scroll";

// import VideoHero from "../assets/video-hero.mp4";

const Hero = () => {
  //  Destructure hero data
  const { title, subtitle, buttonText, pretitle } = hero;

  return (
    <div className="">
      <div className="w-full h-full">
        <video
          className="w-full lg:h-[900px] object-cover h-screen"
          autoPlay
          loop
          muted
          src={Video}
        ></video>
        <div className="container mx-auto relative">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="absolute lg:top-[-450px] top-[-200px] left-0 flex flex-col justify-center items-center w-full h-full px-4 gap-y-8"
          >
            <motion.h1
              variants={fadeIn("down", "tween", 0.4, 1.1)}
              className="text-white lg:text-4xl text-3xl tracking-widest font-bold uppercase w-full text-center "
            >
              {pretitle}
            </motion.h1>
            <motion.h3
              variants={fadeIn("right", "tween", 0.4, 1.2)}
              className="text-[#FFC000] uppercase lg:text-[55px] tracking-wider w-full text-center font-bold text-2xl "
            >
              {title}
            </motion.h3>

            <Link
              to="kai"
              spy={true}
              smooth={true}
              duration={500}
              variants={fadeIn("right", "tween", 0.4, 1.2)}
              className="text-white text-xl px-[120px] py-2 cursor-pointer border hover:bg-secondary hover:border-secondary transition-all duration-300"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
