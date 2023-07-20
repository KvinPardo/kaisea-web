import React, { useEffect, useState } from "react";
import Logo from "/img/logo-alga.webp";
import Nav from "./Nav";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { Link } from "react-router-dom";

const Header = () => {
  // header state
  // const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);
  

  // scroll event
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.screenY > 80 ? setIsActive(true) : setIsActive(false);
  //   });
  // });

  return (
    <header className="fixed w-full z-30  left-0 right-0 flex mx-auto lg:justify-around items-center px-[20px] lg:px-[80px] bg-[#00aec7] transition-all duration-300 h-[80px]">
      {/* Logo */}
      <Link to="/">
        <img className="h-[80px]" src={Logo} alt="" />
      </Link>
      {/* nav hidden mobile */}
      <Nav />
      {/* socials */}
      <div className="hidden lg:flex ">
        <Socials />
      </div>
      {/* nav menu btn */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary text-3xl cursor-pointer" />
        ) : (
          <FiMenu className="text-white text-2xl cursor-pointer" />
        )}
      </div>
      {/* navmobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>

    // <header
    //   className={`${
    //     isActive ? " h-[70px] lg:h-[70px]" : " h-[70px] lg:h-[70px]"
    //   } fixed left-0 right-0 ${
    //     navMobile ? "bg-white" : ""
    //   } z-10 w-full mx-auto transition-all duration-300 bg-[#045f95]`}
    // >
    //   <div className="flex w-full justify-evenly items-center h-full px-[50px]">
    //     {/* logo */}
    //     <Link to="/">
    //       <img src={Logo} alt="" className="" />
    //     </Link>
    //     {/* nav - inicial escondido - en desktop svisible */}
    //     <div className="hidden xl:flex">
    //       <Nav />
    //     </div>

    //     {/* nav menu btn - showin por default*/}
    //     <div
    //       onClick={() => setNavMobile(!navMobile)}
    //       className="xl:hidden absolute right-[5%]  text-white p-2 rounded-md cursor-pointer "
    //     >
    //       {navMobile ? (
    //         <RiCloseFill
    //           className={`${navMobile ? "text-black" : "text-white"} text-2xl`}
    //         />
    //       ) : (
    //         <FiMenu className="text-2xl" />
    //       )}
    //       {/* <FiMenu
    //         className={`${navMobile ? "text-black" : "text-white"} text-2xl `}
    //       /> */}
    //     </div>

    //     {/*  Desktop */}
    //     <div
    //       className={`${navMobile ? "max-h-full" : "max-h-0"}
    //       ${
    //         isActive ? "top-[70px] lg:top-[70]" : "top-[70] lg:top-[70]"
    //       } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
    //     >
    //       <NavMobile />
    //     </div>
    //     {/* Social Icons */}
    //     <div className="hidden xl:flex">
    //       <Socials />
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
