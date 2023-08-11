import React from "react";
import { team } from "../data";

import Profesionales from "../components/Team/Profesionales";
import { motion } from "framer-motion";
import BgTeam from "/img/team.jpg";
import { fadeIn, staggerContainer } from "../variants";

const Team = () => {
  return (
    <div className="w-full h-full">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        name="productos"
        className="relative w-full"
      >
        <motion.div
          variants={fadeIn("tween", 0.4, 0.5)}
          className="w-full h-full relative"
        >
          <img
            src={BgTeam}
            alt=""
            className="w-full lg:h-[650px] object-cover brightness-50 h-screen"
          />
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center  w-full lg:max-w-[900px]"
          >
            <motion.h1
              variants={fadeIn("right", "tween", 0.4, 1.1)}
              className="text-secondary lg:text-[60px] text-[44px] text-center font-bold uppercase lg:tracking-[15px] leading-10 lg:leading-none tracking-[10px]"
            >
              Nuestro Equipo
            </motion.h1>
            <motion.p
              variants={fadeIn("down", "tween", 0.4, 1.2)}
              className="text-white lg:text-3xl text-[20px] font-semibold lg:text-left text-center"
            >
              Conoce a quienes conforman Nuestro Equipo en{" "}
              <strong className="text-secondary tracking-[9px]">KAY</strong>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <section className="section lg:py-32">
        <motion.div
          variants={staggerContainer(0.5, 1.2)}
          initial="hidden"
          whileInView={"show"}
          className="container mx-auto"
        >
          <motion.h3
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="lg:text-4xl text-primary text-[18px] lg:leading-10 px-4 mb-4 text-center py-10"
          >
            Equipo altamente competente y dedicado a aprovechar el potencial de
            estas maravillosas plantas marinas.
          </motion.h3>
          <motion.div
            variants={staggerContainer(0.5, 1.2)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col lg:flex-row w-full container mx-auto h-full justify-center items-center gap-x-10"
          >
            <motion.div
              variants={staggerContainer(0.5, 1.2)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col gap-y-8 lg:my-12"
            >
              <motion.p variants={fadeIn("left", "tween", 0.5, 1.4)}>
                <strong className="text-primary">
                  Experto en biología marina:
                </strong>{" "}
                Contamos con un biólogo marino experimentado, responsable de la
                investigación y la supervisión de los procesos de extracción de
                algas. Su profundo conocimiento de la ecología de las algas
                marinas nos permite llevar a cabo una recolección sostenible y
                respetuosa con el medio ambiente.
              </motion.p>
              <motion.p variants={fadeIn("right", "tween", 0.5, 1.5)}>
                <strong className="text-primary">
                  Ingenieros químicos y de alimentos:{" "}
                </strong>
                Estos profesionales se encargan de desarrollar técnicas
                innovadoras para el procesamiento de las algas y la obtención de
                productos de alta calidad. Trabajan en la extracción de
                compuestos bioactivos, el diseño de métodos de secado y la
                optimización de los procesos de producción.
              </motion.p>
              <motion.p variants={fadeIn("left", "tween", 0.5, 1.6)}>
                <strong className="text-primary">
                  Especialistas en tecnología de extracción:
                </strong>{" "}
                Contamos con un equipo de expertos en tecnología de extracción
                que utiliza métodos eficientes y respetuosos con el medio
                ambiente para obtener los compuestos beneficiosos de las algas.
                Utilizamos técnicas como la extracción con solventes, la
                extracción con agua y la extracción asistida por ultrasonidos.
              </motion.p>
              <motion.p variants={fadeIn("right", "tween", 0.5, 1.7)}>
                <strong className="text-primary">
                  Investigadores en nutrición:
                </strong>{" "}
                Estos profesionales analizan la composición nutricional de las
                algas marinas y estudian sus posibles aplicaciones en la
                industria alimentaria. Trabajan en la identificación de
                nutrientes clave, la evaluación de perfiles de sabor y la
                formulación de productos alimenticios saludables y deliciosos a
                base de algas.
              </motion.p>
            </motion.div>

            {/* <div className="flex lg:max-w-[450px] px-4">
              <TeamSlider />
            </div> */}
          </motion.div>
        </motion.div>
      </section>

      <section className="lg:py-[150px]">
        <motion.div
          variants={staggerContainer(0.5, 1.2)}
          initial="hidden"
          whileInView={"show"}
          className="container mx-auto"
        >
          <div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.5, 1.2)}
              className="lg:text-[40px] text-[30px] font-bold leading-10"
            >
              Nuestros Profesionales
            </motion.h3>
          </div>
          <motion.div
            variants={staggerContainer(0.5, 1.2)}
            initial="hidden"
            whileInView={"show"}
            className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full h-full gap-8 mt-20 overflow-hidden"
          >
            {team.map((item) => (
              <Profesionales key={item.id} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;
