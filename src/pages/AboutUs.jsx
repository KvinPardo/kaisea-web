import MisionVision from "../components/Nosotros/MisionVision";
import Valores from "../components/Valores";
import { aboutUs, vision, mision } from "../data";

const AboutUs = () => {
  return (
    <div className=" h-full w-full">
      <div className="bg-aboutus w-full bg-center bg-no-repeat bg-cover min-h-[800px] h-full flex justify-center items-center">
        <div className="container mx-auto w-full">
          {aboutUs.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center lg:items-start gap-y-5 max-w-[600px] pt-32 lg:py-0"
              >
                <h3 className="text-[80px] font-bold tracking-[15px] uppercase text-secondary">
                  {item.title}
                </h3>
                <p className="text-white lg:text-[24px] shadow-2xl lg:text-left text-center">
                  {item.description}
                </p>
                <p className="text-white lg:text-[24px] shadow-2xl lg:text-left text-center">
                  {item.text2}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <section className="section ">
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
        <Valores/>
      </div>
    </div>
  );
};

export default AboutUs;
