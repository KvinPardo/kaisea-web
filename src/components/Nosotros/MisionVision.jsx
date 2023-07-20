import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";

const MisionVision = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col"
        >
          <motion.h3
            variants={fadeIn("right", "tween", 0.4, 1.1)}
            className="lg:text-5xl font-semibold text-[30px]"
          >
            Nuestra Misión
          </motion.h3>
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col lg:flex-row gap-12 mt-12"
          >
            <div className="flex-1 flex flex-col gap-y-4 w-full h-full py-2">
              <motion.p
                variants={fadeIn("right", "tween", 0.4, 1.1)}
                className="italic"
              >
                El objetivo de liderar el desarrollo sostenible de la industria
                acuícola de algas marinas en Chile es promover un enfoque
                responsable y equilibrado en la producción y utilización de
                algas marinas, maximizando los beneficios económicos y sociales,
                al mismo tiempo que se minimizan los impactos ambientales.
              </motion.p>
              <motion.p
                variants={fadeIn("up", "tween", 0.4, 1.1)}
                className="italic"
              >
                El desarrollo sostenible implica asegurar que las prácticas de
                cultivo y recolección de algas marinas sean realizadas de manera
                sostenible, teniendo en cuenta la capacidad de regeneración de
                los ecosistemas marinos y preservando la biodiversidad. Esto
                implica establecer regulaciones y estándares claros para la
                industria, promoviendo buenas prácticas de manejo y fomentando
                la investigación y la innovación en el sector.
              </motion.p>
            </div>
            <motion.div
              variants={staggerContainer(0.3, 1)}
              initial="hidden"
              whileInView={"show"}
              className="flex-1 "
            >
              <motion.img
                variants={fadeIn("left", "tween", 0.4, 1.1)}
                src=""
                alt=""
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="lg:mt-20"
          >
            <motion.h3
              variants={fadeIn("left", "tween", 0.4, 1.1)}
              className="lg:text-5xl font-semibold text-[30px] text-right"
            >
              Nuestra Visión
            </motion.h3>
            <motion.div
              variants={staggerContainer(0.3, 1)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col lg:flex-row gap-12 lg:mt-12"
            >
              <div className="flex-1">
                <motion.img
                  variants={fadeIn("right", "tween", 0.4, 1.1)}
                  src=""
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <motion.div
                variants={staggerContainer(0.3, 1)}
                initial="hidden"
                whileInView={"show"}
                className="flex-1 flex flex-col gap-y-4 w-full h-full bg-forma"
              >
                <motion.p
                  variants={fadeIn("left", "tween", 0.4, 1.1)}
                  className="italic"
                >
                  Nuestra visión es convertirnos en el referente global en la
                  producción sostenible de algas marinas cultivadas. Creemos
                  firmemente en el potencial de las algas marinas como una
                  fuente de alimentos saludables, ingredientes naturales y
                  soluciones sostenibles para diversos sectores.
                </motion.p>
                <motion.p
                  variants={fadeIn("up", "tween", 0.4, 1.1)}
                  className="italic"
                >
                  Para lograr esta visión, nos comprometemos a operar de manera
                  responsable y respetuosa con el medio ambiente.
                  Implementaremos prácticas de cultivo sostenibles que minimicen
                  los impactos negativos en los ecosistemas marinos y promuevan
                  la conservación de la biodiversidad. Utilizaremos métodos de
                  cultivo que no requieran el uso de productos químicos dañinos
                  o pesticidas, evitando así la contaminación del agua y
                  manteniendo la calidad de nuestros productos.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MisionVision;
