import React from "react";
import Producto1 from "/img/lessonia.png";
import Producto2 from "/img/trabeculata.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Producto = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <motion.h3
            variants={fadeIn("down", "tween", 0.4, 1.2)}
            className="text-5xl font-semibold"
          >
            Nuestros Productos
          </motion.h3>
        </motion.div>
        <div className="flex justify-between w-full h-full lg:pt-20 gap-x-10">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
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
            className="flex-1"
          >
            <motion.h3
              variants={fadeIn("left", "tween", 0.4, 1.2)}
              className="text-2xl mb-4 font-semibold tracking-widest lg:text-[50px] leading-[50px] "
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
          className="flex justify-between w-full h-full lg:pt-40 gap-x-10"
        >
          <div className="flex-1">
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

          <div className="flex-1">
            <div className="shadow-xl">
              <img src={Producto2} alt="" className="w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Producto;
