import React from "react";
import { alianzas } from "../data";

const Alianzas = () => {
  return (
    <section className="section my-24 overflow-hidden">
      <div className="container mx-auto ">
        <h3 className="text-4xl py-20 uppercase font-bold">
          Alianzas Estratégicas
        </h3>
        <div className="grid lg:grid-cols-5 grid-cols-3 mx-auto justify-between w-full gap-x-8">
          {alianzas.map((alianza) => {
            const { id, image, descripcion } = alianza;
            return (
              <div
                className="flex flex-col w-full justify-center lg:py-8 items-center shadow-md my-2 hover:scale-105 transition-all hover:border-primary hover:border"
                key={id}
              >
                <img
                  src={`/img/alianzas/${image}.png`}
                  alt=""
                  className="p-4 lg:w-[100px]"
                />
                <p className="text-center">{descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Alianzas;
