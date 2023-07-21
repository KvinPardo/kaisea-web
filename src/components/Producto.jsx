import React from "react";
import Producto1 from "/img/lessonia.png";
import Producto2 from "/img/trabeculata.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { Link } from "react-router-dom";

const Producto = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center lg:items-center"
        >
          <motion.h3
            variants={fadeIn("down", "tween", 0.4, 1.2)}
            className="lg:text-5xl font-semibold text-3xl text-left"
          >
            Nuestros Productos
          </motion.h3>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-between w-full h-full lg:pt-20 gap-x-10 gap-y-4">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 order-1 lg:order-none"
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1.2)}
              className="shadow-xl"
            >
              <img src={Producto1} alt="" className="w-full h-full" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 "
          >
            <motion.h3
              variants={fadeIn("left", "tween", 0.4, 1.2)}
              className="text-2xl mb-4 font-semibold tracking-widest lg:text-[50px] leading-[50px] mt-5"
            >
              Lessonia Nigrescens
            </motion.h3>
            <motion.p
              variants={fadeIn("left", "tween", 0.4, 1.2)}
              className="italic"
            >
              "Lessonia" es un género de algas marinas pardas, también conocidas
              como kelp, que se encuentran principalmente en las costas del
              océano Pacífico. Estas algas son conocidas por formar bosques
              submarinos en las zonas intermareales y submareales, especialmente
              en las costas de América del Sur, incluyendo Chile y Argentina.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col lg:flex-row justify-between w-full h-full lg:pt-40 gap-x-10 gap-y-4"
        >
          <div className="flex-1 mt-5">
            <motion.h3
              variants={fadeIn("right", "tween", 0.4, 1.2)}
              className="text-2xl mb-4 font-semibold tracking-widest lg:text-[50px] leading-[50px]"
            >
              Lessonia Trabeculata
            </motion.h3>
            <motion.p
              variants={fadeIn("left", "tween", 0.4, 1.2)}
              className="italic"
            >
              La Lessonia trabeculata es una alga parda que forma bosques
              submarinos conocidos como "bosques de kelp". Estos bosques son
              ecosistemas muy productivos y proporcionan un hábitat vital para
              muchas especies marinas, incluyendo peces, invertebrados y aves
              marinas. También desempeñan un papel importante en la captura y
              almacenamiento de carbono, ayudando a mitigar el cambio climático.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <motion.div
              variants={fadeIn("left", "tween", 0.4, 1.2)}
              className="shadow-xl"
            >
              <img src={Producto2} alt="" className="w-full h-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Producto;
