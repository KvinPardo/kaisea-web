import { valores } from "../data";

const Valores = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8">
          <h3 className="text-2xl">
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
          </h3>
          <p>
            Nos comprometemos a operar de manera responsable, preservando los
            recursos marinos y minimizando nuestro impacto ambiental. Trabajamos
            en estrecha colaboración con las comunidades costeras, generando
            empleo y contribuyendo al desarrollo socioeconómico. Nuestra meta es
            liderar el desarrollo sostenible de la industria acuícola de algas
            marinas en Chile, ofreciendo productos de alta calidad y apoyando
            los objetivos de desarrollo sostenibles".
          </p>
        </div>
        <div className="flex flex-col mx-auto items-center gap-y-12 lg:flex-row lg:gap-x-[35px] px-4 lg:px-0 overflow-hidden">
          {valores.map((valor) => {
            // Destructure
            const { title, subtitle, image } = valor;
            return (
              <div
                key={valor.id}
                className="bg-white w-full max-w-[368px] overflow-hidden min-h-[460px] p-5 h-full cursor-pointer relative hover:scale-105 transition-all duration-300  border"
              >
                <div className="w-full flex justify-center items-center">
                  <img src={`/img/${image}.png`} alt="" className="w-28 h-28" />
                </div>
                <div className="flex flex-col justify-center items-center gap-y-8">
                  <p>{title}</p>
                  <p className="">{subtitle.slice(0, 200)}</p>
                  <button className="px-4 py-3 border w-full border-primary">
                    hola
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Valores;
