import { productos1, productos2 } from "../data";

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
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 px-10 flex justify-center items-center">
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
          {productos2.map((producto, index) => {
            const {
              title,
              subtitle,
              description,
              imagen2,
              beneficio1,
              beneficio2,
              beneficio3,
            } = producto;
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row w-full h-full justify-between"
              >
                <div className="flex-1 pr-10 flex justify-center items-center">
                  <ul className="flex flex-col gap-y-3">
                    <li className="text-[15px]">{beneficio1}</li>
                    <li className="text-[15px]">{beneficio2}</li>
                    <li className="text-[15px]">{beneficio3}</li>
                  </ul>
                </div>
                <div className="flex-1 py-12">
                  <h3 className="text-2xl mb-4 text-right">{title}</h3>
                  <img
                    src={`/img/${imagen2}.jpg`}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Productos;
