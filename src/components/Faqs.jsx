import React from "react";
import { faq } from "../data";
import Accordion from "./Accordion";

const Faqs = () => {
  // Destructure faq
  const { icon, title, accordions } = faq;
  return (
    <section className="section pt-[150px] lg:pt-[80px]">
      <div className="max-w-[768px] mx-auto lg:bg-faq bg-center bg-cover">
        {/* section title */}
        <div>
          <h2 className="lg:mt-[100px] font-bold text-2xl">
            {title} <span className="text-secondary">.</span>
          </h2>
        </div>
        {/* accordion list*/}
        <div>
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
