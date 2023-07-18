import React from "react";
import { navData } from "../data";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const NavMobile = () => {
  // destructure
  const { items } = navData;

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center gap-y-6 items-center py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-2xl font-primary uppercase hover:border-b hover:border-[#000] transition duration-200"
                to={item.to}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
