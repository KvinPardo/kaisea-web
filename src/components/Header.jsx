import React, { useEffect, useState } from "react";
import Logo from "/img/logo-alga.webp";
import Nav from "./Nav";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  // Scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? " h-[80px] lg:h-[80px]" : " h-[80px] lg:h-[80px]"
      } fixed left-0 right-0 ${
        navMobile ? "bg-white" : ""
      } z-10 w-full mx-auto transition-all duration-300 bg-[#02175D]`}
    >
      <div className="flex w-full justify-evenly items-center h-full px-[50px]">
        {/* logo */}
        <Link to="/">
          <img src={Logo} alt="" className="" />
        </Link>
        {/* nav - inicial escondido - en desktop svisible */}
        <div className="hidden xl:flex">
          <Nav />
        </div>

        {/* nav menu btn - showin por default*/}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%]  text-white p-2 rounded-md cursor-pointer "
        >
          {navMobile ? (
            <RiCloseFill
              className={`${navMobile ? "text-black" : "text-white"} text-2xl`}
            />
          ) : (
            <FiMenu className="text-2xl" />
          )}
          {/* <FiMenu
            className={`${navMobile ? "text-black" : "text-white"} text-2xl `}
          /> */}
        </div>

        {/*  Desktop */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} 
          ${
            isActive ? "top-[80px] lg:top-[80px]" : "top-[80px] lg:top-[80px]"
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* Social Icons */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
