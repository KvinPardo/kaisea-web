import React from "react";

const MisionVision = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12">
          <div>
            <h3 className="text-5xl font-semibold">Nuestra Misión</h3>
            <div className="flex flex-col lg:flex-row gap-12 mt-12">
              <div className="flex-1 flex flex-col gap-y-4 w-full h-full py-2">
                <p className="italic">
                  El objetivo de liderar el desarrollo sostenible de la
                  industria acuícola de algas marinas en Chile es promover un
                  enfoque responsable y equilibrado en la producción y
                  utilización de algas marinas, maximizando los beneficios
                  económicos y sociales, al mismo tiempo que se minimizan los
                  impactos ambientales.
                </p>
                <p className="italic">
                  El desarrollo sostenible implica asegurar que las prácticas de
                  cultivo y recolección de algas marinas sean realizadas de
                  manera sostenible, teniendo en cuenta la capacidad de
                  regeneración de los ecosistemas marinos y preservando la
                  biodiversidad. Esto implica establecer regulaciones y
                  estándares claros para la industria, promoviendo buenas
                  prácticas de manejo y fomentando la investigación y la
                  innovación en el sector.
                </p>
              </div>
              <div className="flex-1 ">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-5xl font-semibold text-right">
              Nuestra Visión
            </h3>
            <div className="flex flex-col lg:flex-row gap-12 mt-12">
              <div className="flex-1">
                <img src="" alt="" />
              </div>
              <div className="flex-1 flex flex-col gap-y-4 w-full h-full bg-forma">
                <p className="italic">
                  Nuestra visión es convertirnos en el referente global en la
                  producción sostenible de algas marinas cultivadas. Creemos
                  firmemente en el potencial de las algas marinas como una
                  fuente de alimentos saludables, ingredientes naturales y
                  soluciones sostenibles para diversos sectores.
                </p>
                <p className="italic">
                  Para lograr esta visión, nos comprometemos a operar de manera
                  responsable y respetuosa con el medio ambiente.
                  Implementaremos prácticas de cultivo sostenibles que minimicen
                  los impactos negativos en los ecosistemas marinos y promuevan
                  la conservación de la biodiversidad. Utilizaremos métodos de
                  cultivo que no requieran el uso de productos químicos dañinos
                  o pesticidas, evitando así la contaminación del agua y
                  manteniendo la calidad de nuestros productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
