import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const NavMobile = ({ navMobile }) => {
  // const handleClick = () => setNav(!navMobile);

  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-white fixed top-[80px] left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        <li>
          <Link to="/" className="text-primary text-2xl">
            Home
          </Link>
        </li>
        <li>
          <Link to="nosotros" className="text-primary text-2xl">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="nuestro-equipo" className="text-primary text-2xl">
            Nuestro Equipo
          </Link>
        </li>
        <li>
          <Link to="productos" className="text-primary text-2xl">
            Productos
          </Link>
        </li>
        <li></li>
          <Link to="contacto" className="text-primary text-2xl">
            Contacto
          </Link>
        </li>
      </ul>
      {/* Socials */}
      <div className="flex -mt-32 justify-center gap-x-8">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
