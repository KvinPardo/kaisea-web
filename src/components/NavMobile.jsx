import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const NavMobile = () => {
  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center gap-y-6 items-center py-6 mb-8">
        <li>
          <Link to="/nosotros" name="nosotros">Nosotros</Link>
          <Link to="/equipo" name="equipo">Equipo</Link>
          <Link to="/productos" name="productos">Productos</Link>
          <Link to="/contacto" name="contacto">Contacto</Link>
        </li>
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
