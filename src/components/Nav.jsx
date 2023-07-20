import React, { useEffect, useState } from "react";
import { nav } from "../data";
import { NavLink } from "react-router-dom";

// import data

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                activeclass="active"
                className="hover:text-secondary hover:border-b-[3px] hover:border-secondary transition"
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
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
