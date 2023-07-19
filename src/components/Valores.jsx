import { valores } from "../data";
import Cards from "./Cards";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Valores = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col gap-y-8 text-center"
        >
          <motion.h3
            variants={fadeIn("right", "tween", 0.4, 1.0)}
            className="text-2xl"
          >
            En KAI, nos guiamos por valores fundamentales como la
            <span className="text-secondary uppercase font-semibold">
              {" "}
              sostenibilidad
            </span>
            , la{" "}
            <span className="text-secondary uppercase font-semibold">
              {" "}
              calidad
            </span>{" "}
            y la{" "}
            <span className="text-secondary uppercase font-semibold">
              {" "}
              excelencia
            </span>
          </motion.h3>
          <motion.p
            variants={fadeIn("left", "tween", 0.4, 1.2)}
            >
            Nos comprometemos a operar de manera responsable, preservando los
            recursos marinos y minimizando nuestro impacto ambiental. Trabajamos
            en estrecha colaboración con las comunidades costeras, generando
            empleo y contribuyendo al desarrollo socioeconómico. Nuestra meta es
            liderar el desarrollo sostenible de la industria acuícola de algas
            marinas en Chile, ofreciendo productos de alta calidad y apoyando
            los objetivos de desarrollo sostenibles".
          </motion.p>
        </motion.div>

        <div>
          {/* Cards */}
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Valores;
