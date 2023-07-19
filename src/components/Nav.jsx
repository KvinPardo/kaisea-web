import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-9">
        <li className="text-white">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className="text-white">
          <Link to="/equipo">Equipo</Link>
        </li>
        <li className="text-white">
          <Link to="/productos">Productos</Link>
        </li>
        <li className="text-white">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
