import React, { useState } from "react";

import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  //  accordion  state
  const [isOpen, setIsOpen] = useState(false);

  // Destructure accordion
  const { question, answer } = accordion;
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
      <div className="bg-white border rounded-sm">
        <div className="min-h-[60px] flex items-center justify-between px-[30px]">
          <h6 className="font-bold text-[18px] z-20">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-[25px] text-secondary" />
            ) : (
              <FaChevronCircleDown className="text-[25px] text-secondary" />
            )}
          </div>
        </div>

        <div
          className={` ${
            isOpen
              ? "min-h-[200px] lg:min-h-[160px]"
              : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px] `}
        >
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
