import React from "react";
import { team } from "../data";
import TeamSlider from "../components/TeamSlider";
import Profesionales from "../components/Team/Profesionales";

const Team = () => {
  return (
    <div className=" w-full h-full">
      <div className="bg-team w-full bg-center bg-no-repeat bg-cover lg:h-[650px] h-screen flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-white lg:text-[60px] font-bold text-3xl uppercase lg:leading-[60px]">
            Conoce a quienes conforman
          </h3>
          <span className="text-secondary lg:text-[50px] font-bold uppercase text-2xl">
            Nuestro Equipo en KAI
          </span>
        </div>
      </div>

      <section className="section">
        <div className="container mx-auto">
          <h3 className="lg:text-4xl text-primary text-[18px] lg:leading-10 px-4 mb-4 text-center py-10 lg:py-">
            Equipo altamente competente y dedicado a aprovechar el potencial de
            estas maravillosas plantas marinas.
          </h3>
          <div className="flex flex-col lg:flex-row w-full container mx-auto h-full justify-center items-center gap-x-10">
            <div className="flex flex-col gap-y-4">
              <p>
                <strong className="text-primary">
                  Experto en biología marina:
                </strong>{" "}
                Contamos con un biólogo marino experimentado, responsable de la
                investigación y la supervisión de los procesos de extracción de
                algas. Su profundo conocimiento de la ecología de las algas
                marinas nos permite llevar a cabo una recolección sostenible y
                respetuosa con el medio ambiente.
              </p>
              <p>
                <strong className="text-primary">
                  Ingenieros químicos y de alimentos:{" "}
                </strong>
                Estos profesionales se encargan de desarrollar técnicas
                innovadoras para el procesamiento de las algas y la obtención de
                productos de alta calidad. Trabajan en la extracción de
                compuestos bioactivos, el diseño de métodos de secado y la
                optimización de los procesos de producción.
              </p>
              <p>
                <strong className="text-primary">
                  Especialistas en tecnología de extracción:
                </strong>{" "}
                Contamos con un equipo de expertos en tecnología de extracción
                que utiliza métodos eficientes y respetuosos con el medio
                ambiente para obtener los compuestos beneficiosos de las algas.
                Utilizamos técnicas como la extracción con solventes, la
                extracción con agua y la extracción asistida por ultrasonidos.
              </p>
              <p>
                <strong className="text-primary">
                  Investigadores en nutrición:
                </strong>{" "}
                Estos profesionales analizan la composición nutricional de las
                algas marinas y estudian sus posibles aplicaciones en la
                industria alimentaria. Trabajan en la identificación de
                nutrientes clave, la evaluación de perfiles de sabor y la
                formulación de productos alimenticios saludables y deliciosos a
                base de algas.
              </p>
            </div>

            <div className="flex lg:max-w-[450px] px-4">
              <TeamSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pb-[150px]">
        <div className="container mx-auto">
          <div>
            <h3 className="text-[40px] font-bold leading-10 mt-20">
              Nuestros Profesionales
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full h-full gap-8 mt-20 overflow-hidden">
            {team.map((item) => (
              <Profesionales key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
