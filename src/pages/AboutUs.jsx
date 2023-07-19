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
            className="w-full lg:h-[650px] object-cover brightness-75"
          />
        </div>

        <div className="absolute top-[-300px] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-start w-full lg:max-w-[800px]">
          <h1 className="text-secondary text-[70px] font-bold uppercase tracking-[20px]">
            Kai
          </h1>
          <p className="text-white text-2xl font-semibold">
            Empresa Familiar experta en la extracción y procesamiento de algas
            pardas, siendo reconocidos por la calidad de nuestros productos y
            nuestro compromiso con la sostenibilidad.
          </p>
        </div>
      </motion.div>

      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center w-full h-full gap-y-6">
            <h3 className="text-xl">
              KAI es una empresa familiar con sede en la provincia de Vallenar,
              en la zona norte de Chile. Desde hace más de dos décadas, nos
              hemos dedicado al negocio acuícola de algas marinas, aprovechando
              la riqueza de las costas chilenas.{" "}
            </h3>
            <p className="text-xl text-primary">
              Nuestra experiencia y dedicación nos han convertido en referentes
              en la extracción y procesamiento de algas marinas pardas, siendo
              reconocidos por la calidad de nuestros productos y nuestro
              compromiso con la sostenibilidad".
            </p>
          </div>
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
