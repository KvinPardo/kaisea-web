import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import { nav } from "../data";

const NavMobile = ({ navMobile }) => {
  const handleClick = () => setNav(!navMobile);

  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-white fixed top-[80px] left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <Link
                name={item.name}
                onClick={handleClick}
                to={item.href}
                smooth="true"
                duration={500}
                className="text-primary text-2xl"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Socials */}
      <div className="flex -mt-32 justify-center gap-x-8">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
