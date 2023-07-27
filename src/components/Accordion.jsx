import React, { useState } from "react";

const Accordion = () => {
  return (
    <>
      <h3 className="lg:text-[60px] text-[20px] text-center lg:py-20 py-4">
        Preguntas Frecuentes
      </h3>
      <div className="flex flex-col justify-center items-center w-full container mx-auto max-w-[800px] lg:py-10 mb-32">
        <div className="collapse collapse-plus border-secondary border rounded-none lg:py-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            <h3 className="text-primary lg:text-[20px] text-[14px]">
              ¿Qué son las algas marinas?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-black lg:text-[20px] text-[14px]">
              heLas algas marinas son organismos fotosintéticos que se
              encuentran en ambientes acuáticos, principalmente en los océanos y
              mares. Son conocidas por su capacidad de realizar fotosíntesis,
              convirtiendo la luz solar en energía para su crecimiento. Existen
              diversos tipos de algas, como las algas verdes, pardas y rojas,
              cada una con características distintas.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-secondary rounded-none lg:py-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            <h3 className="text-primary lg:text-[20px] text-[14px]">
              ¿Cuáles son los beneficios de las algas marinas?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-black lg:text-[20px] text-[14px]">
              Las algas marinas son una fuente rica de nutrientes y compuestos
              bioactivos que ofrecen diversos beneficios para la salud y el
              medio ambiente.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-secondary rounded-none lg:py-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            <h3 className="text-primary lg:text-[20px] text-[14px]">
              ¿Cómo se extraen las algas marinas?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-black lg:text-[20px] text-[14px]">
              La extracción de algas marinas puede llevarse a cabo de diversas
              formas, dependiendo del tipo de alga y su uso previsto.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-secondary rounded-none lg:py-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            <h3 className="text-primary lg:text-[20px] text-[14px]">
              ¿Cómo se extraen las algas marinas?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-black lg:text-[20px] text-[14px]">
              La extracción de algas marinas puede llevarse a cabo de diversas
              formas, dependiendo del tipo de alga y su uso previsto.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-secondary rounded-none lg:py-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            <h3 className="text-primary lg:text-[20px] text-[14px]">
              ¿Cuáles son los tipos de extracción?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-black lg:text-[20px] text-[14px]">
              Recolección manual: En algunas regiones, las algas se recolectan a
              mano, especialmente las que crecen cerca de la costa o en áreas
              poco profundas.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-secondary rounded-none lg:py-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            <h3 className="text-primary lg:text-[20px] text-[14px]">
              ¿Cuáles son los desafíos asociados con la extracción de algas
              marinas?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-black lg:text-[20px] text-[14px]">
              La Sostenibilidad, Regulaciones, Contaminación y Competencia.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-secondary rounded-none lg:py-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            <h3 className="text-primary lg:text-[20px] text-[14px]">
              ¿Cuál es el propósito principal de la extracción de algas marinas?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-black lg:text-[20px] text-[14px]">
              La extracción de algas marinas se realiza con diversos propósitos,
              dependiendo de la industria y las necesidades específicas.
            </p>
          </div>
        </div>
      </div>
    </>

    // <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
    //   <div className="bg-white border rounded-sm">
    //     <div className="min-h-[60px] flex items-center justify-between px-[30px]">
    //       <h6 className="font-bold text-[18px] z-20">{question}</h6>
    //       <div>
    //         {isOpen ? (
    //           <FaChevronCircleUp className="text-[25px] text-secondary cursor-pointer" />
    //         ) : (
    //           <FaChevronCircleDown className="text-[25px] text-secondary cursor-pointer" />
    //         )}
    //       </div>
    //     </div>

    //     <div
    //       className={`${
    //         isOpen ? "min-h-[200px] lg:min-h-[160px] relative" : "min-h-0"
    //       } max-h-0 overflow-hidden flex justify-center transition-all px-[30px] relative`}
    //     >
    //       <div className="mt-6 overflow-y-scroll">
    //         <p>{answer}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Accordion;
