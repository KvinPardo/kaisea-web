import React from "react";
import Hero from "../components/Hero";
import Company from "../components/Company";
import Action from "../components/Action";

import Alianzas from "../components/Alianzas";

import Producto from "../components/Producto";

import Accordion from "../components/Accordion";

const Home = () => {
  return (
    <div className="w-full overflow-hidden h-full" name="home">
      <Hero />
      <Company />
      {/* <Producto /> */}
      {/* <Valores/> */}

      {/* <Productos /> */}

      <Action />
      <Alianzas />
      <Accordion />
    </div>
  );
};

export default Home;
