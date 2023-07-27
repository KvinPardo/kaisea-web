import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Socials from "./Socials";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { navigation } from "../data";
import { AiFillPushpin } from "react-icons/ai";
// data

const NavMobile = () => {
  // state nav
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav>
      {/* menu btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer lg:hidden "
      >
        {isOpen ? (
          <RiCloseFill className="text-2xl text-white" />
        ) : (
          <FiMenu className="text-2xl text-white" />
        )}
      </div>
      {/* menu items */}
      <ul
        className={`${
          isOpen ? "max-h-96 p-10" : "max-h-0 p-0"
        } flex flex-col justify-center items-center absolute w-full bg-white top-[80px] left-0 shadow-md space-y-6 overflow-hidden transition-all duration-300`}
      >
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-secondary border-b-2 border-secondary"
              : "text-primary"
          } hover:text-secondary `}
        >
          Home
        </Link>
        <Link
          to="/sobre-nosotros"
          className={`${
            location.pathname === "/sobre-nosotros"
              ? "text-secondary border-b-2 border-secondary"
              : "text-primary"
          } hover:text-secondary`}
        >
          Sobre nosotros
        </Link>
        {/* <Link
          to="/nuestro-equipo"
          className={`${
            location.pathname === "/nuestro-equipo"
              ? "text-secondary border-b-2 border-secondary"
              : "text-primary"
          } hover:text-secondary `}
        >
          Nuestro Equipo
        </Link> */}
        <Link
          to="/productos"
          className={`${
            location.pathname === "/productos"
              ? "text-secondary border-b-2 border-secondary"
              : "text-primary"
          } hover:text-secondary`}
        >
          Productos
        </Link>
        <Link
          to="/contacto"
          className={`${
            location.pathname === "/contacto"
              ? "text-secondary border-b-2 border-secondary"
              : "text-primary"
          } hover:text-secondary `}
        >
          Contacto
        </Link>
      </ul>
    </nav>
  );
};

export default NavMobile;
