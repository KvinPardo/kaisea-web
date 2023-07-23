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
    <nav className="">
      <ul className="flex justify-center items-center gap-x-10 ">
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
