import { productos1, productos2 } from "../data";
import Polvo from "/img/polvo-algas.webp";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Productos = () => {
  return (
    <section className="section" name="productos">
      <div className="container mx-auto">
        <motion.div
          name="productos"
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col gap-y-4 text-center justify-center items-center"
        >
          <motion.h3
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="text-5xl font-bold"
          >
            Nuestros Productos
          </motion.h3>
          <motion.p variants={fadeIn("left", "tween", 0.4, 1.2)}>
            KAI recolecta, seca y procesa algas marinas pardas Lessonia
            nigrescens y Lessonia trabeculata. Estos productos son materia prima
            para el desarrolo de productos de la industria de alginatos, donde
            las propiedades gelificantes y espesantes sirven para el desarrollo
            de aplicaciones en la industria alimenticia, farmacéutica y médica.
          </motion.p>
          <motion.p variants={fadeIn("right", "tween", 0.4, 1.3)}>
            Son especies de algas pardas pertenecientes al género Lessonia.
            Estas algas son nativas de la costa del océano Pacífico,
            especialmente en las regiones costeras de Chile y Perú. Son
            conocidas por su forma alargada y ramificada, que les da un aspecto
            similar a un arbusto sumergido en el agua.
          </motion.p>
          <motion.p variants={fadeIn("left", "tween", 0.4, 1.4)}>
            Estas algas son consideradas como recursos marinos valiosos debido a
            sus diversos beneficios y aplicaciones.
          </motion.p>
        </motion.div>

        <section className="section">
          {productos1.map((producto, index) => {
            const {
              title,
              subtitle,
              description,
              imagen1,
              beneficio1,
              beneficio2,
              beneficio3,
            } = producto;
            return (
              <motion.div
                variants={staggerContainer(0.3, 1)}
                initial="hidden"
                whileInView={"show"}
                key={index}
                className="flex flex-col lg:flex-row w-full h-full justify-between"
              >
                <div className="flex-1 py-12 h-full">
                  <motion.h3
                    variants={fadeIn("right", "tween", 0.4, 1.1)}
                    className="text-2xl mb-4 font-semibold tracking-widest lg:text-[50px] leading-[50px]"
                  >
                    {title}
                  </motion.h3>
                  <motion.img
                    variants={fadeIn("up", "tween", 0.4, 1.4)}
                    src={`/img/${imagen1}.png`}
                    alt=""
                    className="w-full h-full shadow-xl"
                  />
                </div>
                <motion.div
                  variants={staggerContainer(0.3, 1)}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex-1 flex-col gap-y-8 lg:px-10 px-2 flex justify-center items-center"
                >
                  <motion.p variants={fadeIn("left", "tween", 0.4, 1.4)}>
                    <span className="text-secondary font-semibold">
                      Fuente de nutrientes:
                    </span>{" "}
                    Estas algas son ricas en nutrientes esenciales, como
                    vitaminas (A, C, E, y algunas del complejo B), minerales
                    (como calcio, magnesio, hierro y yodo), proteínas y fibra.
                    Estos nutrientes pueden ser beneficiosos para mantener una
                    buena salud y funcionamiento del cuerpo humano.
                  </motion.p>
                  <motion.p variants={fadeIn("up", "tween", 0.4, 1.4)}>
                    <span className="text-secondary font-semibold">
                      Propiedades antioxidantes:
                    </span>{" "}
                    Las algas Lessonia nigrescens y Lessonia trabeculata
                    contienen compuestos antioxidantes, como polifenoles y
                    carotenoides. Los antioxidantes ayudan a proteger las
                    células del daño causado por los radicales libres, lo que
                    puede contribuir a la prevención de enfermedades y al
                    envejecimiento saludable.
                  </motion.p>
                  <motion.p variants={fadeIn("left", "tween", 0.4, 1.4)}>
                    <span className="text-secondary font-semibold">
                      Apoyo a la salud digestiva:
                    </span>{" "}
                    La fibra presente en estas algas puede ayudar a promover una
                    digestión saludable y regular. Además, pueden actuar como
                    prebióticos, lo que significa que proporcionan alimento para
                    las bacterias beneficiosas en el intestino, favoreciendo así
                    un equilibrio saludable de la microbiota intestinal.
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </section>

        {/* 2DO PRODUCTO */}

        <section className="section">
          {productos2.map((producto, id) => {
            const { title, imagen2, beneficio1, beneficio2, beneficio3 } =
              producto;
            return (
              <div key={id} className="flex flex-col lg:flex-row w-full h-full">
                <motion.div
                  variants={staggerContainer(0.3, 1)}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex-1 flex-col gap-y-8 lg:mr-10 px-2 flex  items-center"
                >
                  <motion.p variants={fadeIn("right", "tween", 0.4, 1.4)}>
                    <span className="text-secondary font-semibold">
                      Potencial anticancerígeno:{" "}
                    </span>
                    Algunos estudios sugieren que las algas Lessonia nigrescens
                    y Lessonia trabeculata contienen compuestos con propiedades
                    anticancerígenas. Estos compuestos pueden tener efectos
                    inhibidores sobre el crecimiento de células cancerosas y,
                    por lo tanto, podrían ser útiles en la prevención y
                    tratamiento de ciertos tipos de cáncer.
                  </motion.p>
                  <motion.p variants={fadeIn("up", "tween", 0.4, 1.5)}>
                    <span className="text-secondary font-semibold">
                      Aplicaciones en la industria alimentaria y cosmética:
                    </span>{" "}
                    Debido a su perfil nutricional y propiedades beneficiosas
                    para la piel, estas algas se utilizan en la elaboración de
                    alimentos funcionales, suplementos alimenticios y productos
                    cosméticos. Pueden encontrarse en forma de extractos, polvos
                    o como ingredientes en productos específicos para el cuidado
                    de la piel y el cabello.
                  </motion.p>
                  <motion.p variants={fadeIn("left", "tween", 0.4, 1.5)}>
                    Es importante destacar que antes de consumir o utilizar
                    algas como suplemento o en productos cosméticos, es
                    recomendable consultar a un profesional de la salud o
                    experto en el tema para obtener información y
                    recomendaciones específicas sobre su uso adecuado y posibles
                    contraindicaciones.
                  </motion.p>
                </motion.div>
                <motion.div
                  variants={staggerContainer(0.3, 1)}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex-1 py-12 -order-1 lg:order-none h-full"
                >
                  <motion.h3
                    variants={fadeIn("left", "tween", 0.4, 1.1)}
                    className="text-2xl mb-4 font-semibold tracking-widest lg:text-[50px] leading-[50px] text-right"
                  >
                    {title}
                  </motion.h3>
                  <motion.img
                    variants={fadeIn("up", "tween", 0.4, 1.4)}
                    src={`/img/${imagen2}.jpg`}
                    alt=""
                    className="w-full h-full shadow-xl"
                  />
                </motion.div>
              </div>
            );
          })}
        </section>

        {/* POLVOS DE ALGAS */}

        <section className="section">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="px-4"
          >
            <motion.h3
              variants={fadeIn("right", "tween", 0.4, 1.4)}
              className="text-2xl mb-4 font-semibold tracking-widest lg:text-[50px] leading-[50px]"
            >
              Polvo de Algas
            </motion.h3>
            <motion.p
              variants={fadeIn("left", "tween", 0.4, 1.4)}
              className="text-lg mt-4"
            >
              también conocido como alga en polvo o polvo de algas marinas, es
              un producto derivado de las algas que se utiliza en diversas
              industrias y como suplemento nutricional.{" "}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex justify-between items-center w-full h-full my-5"
          >
            <div className="flex flex-col lg:flex-row justify-between w-full h-full">
              <div className="flex-1 flex flex-col justify-evenly items-cente px-4">
                <motion.p variants={fadeIn("right", "tween", 0.4, 1.4)}>
                  <span className="text-secondary font-semibold">
                    Alto contenido nutricional:
                  </span>{" "}
                  Las algas marinas son ricas en vitaminas, minerales,
                  antioxidantes y fibra. El polvo de algas puede proporcionar
                  una amplia gama de nutrientes esenciales, como yodo, hierro,
                  calcio, magnesio, vitamina C y vitamina K.
                </motion.p>
                <motion.p variants={fadeIn("up", "tween", 0.4, 1.4)}>
                  <span className="text-secondary font-semibold">
                    Fuente de antioxidantes:
                  </span>{" "}
                  Las algas contienen varios compuestos antioxidantes que ayudan
                  a proteger las células del estrés oxidativo y los radicales
                  libres en el cuerpo.
                </motion.p>
              </div>
              <motion.div
                variants={staggerContainer(0.3, 1)}
                initial="hidden"
                whileInView={"show"}
                className="flex-1 flex justify-center items-center"
              >
                <motion.img
                  variants={fadeIn("down", "tween", 0.4, 1.4)}
                  src={Polvo}
                  alt="polvo"
                  className="bg-white rounded-full lg:w-80 h-full shadow-md w-60"
                />
              </motion.div>
              <motion.div
                variants={staggerContainer(0.3, 1)}
                initial="hidden"
                whileInView={"show"}
                className="flex-1 flex flex-col justify-evenly items-center p-4"
              >
                <motion.p variants={fadeIn("left", "tween", 0.4, 1.4)}>
                  <span className="text-secondary font-semibold">
                    Posible efecto antiinflamatorio:
                  </span>{" "}
                  Algunos estudios sugieren que ciertos compuestos presentes en
                  las algas pueden tener propiedades antiinflamatorias, lo que
                  podría ser beneficioso para la salud en general.
                </motion.p>
                <motion.p variants={fadeIn("up", "tween", 0.4, 1.4)}>
                  <span className="text-secondary font-semibold">
                    Apoyo a la salud digestiva:
                  </span>{" "}
                  El polvo de algas puede contener fibra dietética que favorece
                  el tránsito intestinal y promueve la salud digestiva.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="pt-20"
          >
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1.4)}
              className="text-center text-2xl"
            >
              "Siempre es{" "}
              <span className="text-secondary font-semibold">recomendable</span>{" "}
              consultar con un{" "}
              <span className="text-secondary font-semibold">
                profesional de la salud{" "}
              </span>
              antes de comenzar a utilizar suplementos o realizar cambios
              significativos en tu dieta para determinar si el polvo de algas es
              adecuado para ti y tu situación particular".
            </motion.p>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Productos;
