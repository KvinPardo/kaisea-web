import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// import data

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-8">
        <li>
          <NavLink
            to="/"
            activeclass="active"
            className="text-white text-[18px] hover:text-secondary"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nosotros"
            className="text-white text-[18px] hover:text-secondary"
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nuestro-equipo"
            className="text-white text-[18px] hover:text-secondary"
          >
            Nuestro Equipo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className="text-white text-[18px] hover:text-secondary"
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className="text-white text-[18px] hover:text-secondary"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
    // <nav>
    //   <ul className="flex gap-x-9">
    //     <li className="text-white">
    //       <NavLink
    //         activeClass="active"
    //         to="/"
    //         className="hover:border-b-[1px]"
    //       >
    //         Inicio
    //       </NavLink>
    //     </li>
    //     <li className="text-white">
    //       <NavLink to="/nosotros" className="hover:border-b-[1px]">
    //         Nosotros
    //       </NavLink>
    //     </li>
    //     <li className="text-white">
    //       <NavLink to="/equipo" className="hover:border-b-[1px]">
    //         Equipo
    //       </NavLink>
    //     </li>
    //     <li className="text-white">
    //       <NavLink to="/productos" className="hover:border-b-[1px]">
    //         Productos
    //       </NavLink>
    //     </li>
    //     <li className="text-white">
    //       <NavLink to="/contacto" className="hover:border-b-[1px]">
    //         Contacto
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Nav;
