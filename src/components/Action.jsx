import React from "react";
import { action } from "../data";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Action = () => {
  return (
    <section className="section lg:bg-wave bg-center bg-no-repeat bg-cover w-full h-full my-20 px-3">
      <div className="container mx-auto">
        {action.map((action, index) => {
          // Destructure
          const { image, title, text2, btnText } = action;
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-start lg:gap-x-[40px]"
            >
              {/* text */}
              <div className="flex-1 my-8">
                <h3 className=" text-primary text-[18px] lg:text-3xl mb-4 lg:mt-0">
                  {title}
                </h3>
                <h2 className="text-primary lg:text-xl text-[17px]">{text2}</h2>
                <Link
                  to="productos"
                  spy= {true}
                  className="border border-primary w-[200px] py-3 mt-5 flex justify-center items-center gap-x-3 group hover:bg-primary  hover:text-white"
                >
                  {btnText}{" "}
                  <FiChevronRight className="group-hover:translate-x-2 transition-all duration-200" />
                </Link>
              </div>
              {/* image */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={`/img/${image}.jpg`}
                  alt=""
                  className="h-full shadow-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Action;
