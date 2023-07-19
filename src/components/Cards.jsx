import React, { useState } from "react";
import { valores } from "../data";

const Cards = () => {
  const [index, setIndex] = useState(1);
  // Destructure products

  return (
    <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] w-full justify-between mt-20">
      {valores.map((card, cardIndex) => {
        const { title, subtitle, image } = card;

        return (
          <div key={cardIndex}>
            <div
              onClick={() => setIndex(cardIndex)}
              className={`${
                index === cardIndex
                  ? "bg-[#d6ffc4] scale-105 text-primary"
                  : "bg-white"
              } border-[1px] border-secondary h-full w-[350px] flex flex-col mx-auto px-[60px] py-10 text-center cursor-pointer transition-all`}
            >
              {/* card icon */}
              <div className="mb-6 flex justify-center items-center ">
                <img
                  src={`/img/${image}.png`}
                  alt="imagen-icono"
                  className="w-[100px] h-[100px]"
                />
              </div>
              {/* card title */}
              <div className="font-medium text-black text-[16px] flex flex-col gap-y-10">
                <h3>{title}</h3>
                <p className="font-light">{subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
