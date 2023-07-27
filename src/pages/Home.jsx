import React from "react";
import Hero from "../components/Hero";
import Company from "../components/Company";
import Action from "../components/Action";

import Alianzas from "../components/Alianzas";

import Producto from "../components/Producto";
import ScrollToTop from "../components/ScrollToTop";
import Faqs from "../components/Faqs";

const Home = () => {
  return (
    <div className="w-full overflow-hidden h-full" name="home">
      <Hero />
      <Company />
      {/* <Producto /> */}
      {/* <Valores/> */}

      {/* <Productos /> */}
      <Alianzas />
      <Action />
      <Faqs />
    </div>
  );
};

export default Home;
