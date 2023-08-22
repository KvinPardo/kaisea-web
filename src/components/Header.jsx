import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import Logo from "/img/logo-nuevo.png";

const Header = () => {
  return (
    <motion.header
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      whileInView={"show"}
      className="fixed bg- w-full mx-auto h-[80px] shadow-md px-4 lg:px-8 z-50 transition-all duration-500 bg-bgprimary flex items-center justify-between"
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.4, 1.2)}
        className="container mx-auto flex justify-between items-center"
      >
        <div className="flex items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-widest"
          >
            <img src={Logo} alt="" className="lg:w-28 w-[80px]" />
          </Link>
          {/* nav */}
        </div>
        <div className="hidden lg:flex">
          <Nav />
        </div>
        <div className="hidden lg:flex">
          {/*  */}
          <Socials />
        </div>
      </motion.div>

      {/* nav mobile */}
      <div className="lg:hidden">
        <NavMobile />
      </div>
    </motion.header>
  );
};

export default Header;
