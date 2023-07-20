import React from "react";
import { faq } from "../data";
import Accordion from "./Accordion";
import { FaQuestion } from "react-icons/fa";

const Faqs = () => {
  // Destructure faq
  const { title, accordions } = faq;
  return (
    <section className="section flex justify-between items-center h-full w-full pb-52">
      <div className="max-w-[768px] mx-auto relative h-full">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] h-full -translate-y-[50%] flex flex-col justify-center lg:items-center items-center w-full lg:max-w-[800px]">
          <FaQuestion className="lg:text-[600px] hidden lg:flex text-gray-300/40 z-20 h-full" />
        </div>
        {/* section title */}
        <div className="relative flex lg:justify-center items-center z-20 py-10 justify-start">
          <h2 className="font-medium lg:text-[60px] text-[30px] px-6">
            {title} <span className="text-secondary">.</span>
          </h2>
        </div>
        {/* accordion list*/}
        <div className="flex flex-col gap-y-4 px-4">
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
