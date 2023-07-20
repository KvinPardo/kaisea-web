import MisionVision from "../components/Nosotros/MisionVision";
import Valores from "../components/Valores";
// import { aboutUs, vision, mision } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import HeroAbout from "/img/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="h-full w-full">
      <motion.div name="productos" className="relative w-full">
        <div className="w-full h-full relative">
          <img
            src={HeroAbout}
            alt=""
            className="w-full lg:h-[650px] object-cover brightness-50 h-screen"
          />
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center lg:items-start items-center  w-full lg:max-w-[800px]"
          >
            <motion.h1
              variants={fadeIn("right", "tween", 0.4, 1.1)}
              className="text-secondary lg:text-[70px] text-[44px] font-bold uppercase lg:tracking-[20px] tracking-[10px]"
            >
              Kai
            </motion.h1>
            <motion.p
              variants={fadeIn("down", "tween", 0.4, 1.2)}
              className="text-white lg:text-2xl text-[20px] font-semibold lg:text-left text-center"
            >
              Empresa Familiar experta en la extracción y procesamiento de algas
              pardas, siendo reconocidos por la calidad de nuestros productos y
              nuestro compromiso con la sostenibilidad.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <section className="section">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col justify-center items-center w-full h-full gap-y-6"
          >
            <motion.h3
              variants={fadeIn("down", "tween", 0.4, 1.2)}
              className="text-xl text-center"
            >
              KAI es una empresa familiar con sede en la provincia de Vallenar,
              en la zona norte de Chile. Desde hace más de dos décadas, nos
              hemos dedicado al negocio acuícola de algas marinas, aprovechando
              la riqueza de las costas chilenas.{" "}
            </motion.h3>
            <motion.p
              variants={fadeIn("down", "tween", 0.4, 1.3)}
              className="text-xl text-primary text-center"
            >
              Nuestra experiencia y dedicación nos han convertido en referentes
              en la extracción y procesamiento de algas marinas pardas, siendo
              reconocidos por la calidad de nuestros productos y nuestro
              compromiso con la sostenibilidad".
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div>
        <MisionVision />
      </div>

      <div>
        <Valores />
      </div>
    </div>
  );
};

export default AboutUs;
