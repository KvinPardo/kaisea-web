import { productos1, productos2 } from "../data";
import Polvo from "/img/polvo-algas.webp";

const Productos = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4 text-center justify-center items-center">
          <h3 className="text-4xl font-bold">Nuestros Productos</h3>
          <p>
            KAI recoleta, seca y procesa algas marinas pardas Lessonia
            nigrescens y Lessonia trabeculata. Estos productos son materia prima
            para el desarrolo de productos de la industria de alginatos, donde
            las propiedades gelificantes y espesantes sirven para el desarrollo
            de aplicaciones en la industria alimenticia, farmacéutica y médica.
          </p>
          <p>
            Son especies de algas pardas pertenecientes al género Lessonia.
            Estas algas son nativas de la costa del océano Pacífico,
            especialmente en las regiones costeras de Chile y Perú. Son
            conocidas por su forma alargada y ramificada, que les da un aspecto
            similar a un arbusto sumergido en el agua.
          </p>
          <p>
            Estas algas son consideradas como recursos marinos valiosos debido a
            sus diversos beneficios y aplicaciones.
          </p>
        </div>

        <div className="my-12">
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
              <div
                key={index}
                className="flex flex-col lg:flex-row w-full h-full justify-between"
              >
                <div className="flex-1 py-12">
                  <h3 className="text-2xl mb-4">{title}</h3>
                  <img
                    src={`/img/${imagen1}.png`}
                    alt=""
                    className="w-full h-full shadow-xl"
                  />
                </div>
                <div className="flex-1 lg:px-10 px-2 flex justify-center items-center">
                  <ul className="flex flex-col gap-y-3">
                    <li className="text-[15px]">{beneficio1}</li>
                    <li className="text-[15px]">{beneficio2}</li>
                    <li className="text-[15px]">{beneficio3}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="my-12">
          {productos2.map((producto, id) => {
            const { title, imagen2, beneficio1, beneficio2, beneficio3 } =
              producto;
            return (
              <div
                key={id}
                className="flex  flex-col lg:flex-row w-full h-full"
              >
                <div className="flex-1 lg:pr-10 px-2 flex justify-center items-center">
                  <ul className="flex flex-col gap-y-3">
                    <li className="text-[15px]">{beneficio1}</li>
                    <li className="text-[15px]">{beneficio2}</li>
                    <li className="text-[15px]">{beneficio3}</li>
                  </ul>
                </div>
                <div className="flex-1 py-12 -order-1 lg:order-none">
                  <h3 className="text-2xl mb-4 text-right">{title}</h3>
                  <img
                    src={`/img/${imagen2}.jpg`}
                    alt=""
                    className="w-full h-full shadow-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="">
          <div className="px-4">
            <h3 className="text-2xl">Polvo de Algas</h3>
            <p className="text-lg mt-4">
              también conocido como alga en polvo o polvo de algas marinas, es
              un producto derivado de las algas que se utiliza en diversas
              industrias y como suplemento nutricional.{" "}
            </p>
          </div>

          <div className="flex justify-between items-center w-full h-full my-5">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full">
              <div className="flex-1 flex flex-col justify-evenly items-cente px-4">
                <p>
                  <span className="text-secondary font-semibold">
                    Alto contenido nutricional:
                  </span>{" "}
                  Las algas marinas son ricas en vitaminas, minerales,
                  antioxidantes y fibra. El polvo de algas puede proporcionar
                  una amplia gama de nutrientes esenciales, como yodo, hierro,
                  calcio, magnesio, vitamina C y vitamina K.
                </p>
                <p>
                  <span className="text-secondary font-semibold">
                    Fuente de antioxidantes:
                  </span>{" "}
                  Las algas contienen varios compuestos antioxidantes que ayudan
                  a proteger las células del estrés oxidativo y los radicales
                  libres en el cuerpo.
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={Polvo}
                  alt=""
                  className="bg-white rounded-full lg:w-80 h-full shadow-md w-60"
                />
              </div>
              <div className="flex-1 flex flex-col justify-evenly items-center p-4">
                <p>
                  <span className="text-secondary font-semibold">
                    Posible efecto antiinflamatorio:
                  </span>{" "}
                  Algunos estudios sugieren que ciertos compuestos presentes en
                  las algas pueden tener propiedades antiinflamatorias, lo que
                  podría ser beneficioso para la salud en general.
                </p>
                <p>
                  <span className="text-secondary font-semibold">
                    Apoyo a la salud digestiva:
                  </span>{" "}
                  El polvo de algas puede contener fibra dietética que favorece
                  el tránsito intestinal y promueve la salud digestiva.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center">
            "Siempre es recomendable consultar con un profesional de la salud
            antes de comenzar a utilizar suplementos o realizar cambios
            significativos en tu dieta para determinar si el polvo de algas es
            adecuado para ti y tu situación particular".
          </p>
        </div>
      </div>
    </section>
  );
};

export default Productos;
