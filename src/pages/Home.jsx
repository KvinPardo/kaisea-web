import React from "react";
import Hero from "../components/Hero";
import Company from "../components/Company";
import Action from "../components/Action";
import Mision from "../components/Mision";
import Alianzas from "../components/Alianzas";
import Valores from "../components/Valores";
import Productos from "../components/Productos";

const Home = () => {
  return (
    <div className="w-full overflow-hidden ">
      <Hero />
      <Company />
      <Valores/>
      
      <Productos />
      <Alianzas />
     <Action />
    </div>
  );
};

export default Home;
