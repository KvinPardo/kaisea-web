import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [location.pathname]);

  return (
    // <nav className="hidden lg:flex">
    //   <ul className="flex text-white gap-x-8">
    //     <li>
    //       <NavLink
    //         to="/"
    //         activeclass="active"
    //         className="text-white text-[18px] hover:text-secondary"
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/nosotros"
    //         className="text-white text-[18px] hover:text-secondary"
    //       >
    //         Nosotros
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/nuestro-equipo"
    //         className="text-white text-[18px] hover:text-secondary"
    //       >
    //         Nuestro Equipo
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/productos"
    //         className="text-white text-[18px] hover:text-secondary"
    //       >
    //         Productos
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/contacto"
    //         className="text-white text-[18px] hover:text-secondary"
    //       >
    //         Contacto
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="">
      <ul className="flex justify-center items-center gap-x-[25px]">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-secondary border-b-2 border-secondary"
              : "text-white"
          } hover:text-secondary `}
        >
          Home
        </Link>
        <Link
          to="/sobre-nosotros"
          className={`${
            location.pathname === "/sobre-nosotros"
              ? "text-secondary border-b-2 border-secondary"
              : "text-white"
          } hover:text-secondary`}
        >
          Sobre nosotros
        </Link>
        <Link
          to="/nuestro-equipo"
          className={`${
            location.pathname === "/nuestro-equipo"
              ? "text-secondary border-b-2 border-secondary"
              : "text-white"
          } hover:text-secondary `}
        >
          Nuestro Equipo
        </Link>
        <Link
          to="/productos"
          className={`${
            location.pathname === "/productos"
              ? "text-secondary border-b-2 border-secondary"
              : "text-white"
          } hover:text-secondary`}
        >
          Productos
        </Link>
        <Link
          to="/contacto"
          className={`${
            location.pathname === "/contacto"
              ? "text-secondary border-b-2 border-secondary"
              : "text-white"
          } hover:text-secondary `}
        >
          Contacto
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
