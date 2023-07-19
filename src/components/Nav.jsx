import React, { useEffect, useState } from "react";
import { navData } from "../data";
import { Link } from "react-router-dom";
Link;

const Nav = () => {
  // Destructure
  const { items } = navData;

  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index} className="text-white">
              <Link to={item.to} preventScrollReset={true}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
