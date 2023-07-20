import React from "react";
import Hero from "../components/Hero";
import Company from "../components/Company";
import Action from "../components/Action";

import Alianzas from "../components/Alianzas";

import Producto from "../components/Producto";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Company />
      <Producto />
      {/* <Valores/> */}

      {/* <Productos /> */}
      <Alianzas />
      <Action />
    </div>
  );
};

export default Home;
