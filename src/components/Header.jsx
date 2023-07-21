import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <header className="fixed bg- w-full mx-auto h-[80px] shadow-md px-4 lg:px-8 z-50 transition-all duration-500 bg-bgprimary flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-widest"
          >
            KAISEA.
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
      </div>

      {/* nav mobile */}
      <div className="lg:hidden">
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
