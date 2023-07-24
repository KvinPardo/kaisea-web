import React from "react";

const ErrorForm = ({ mensaje }) => {
  return (
    <div className="bg-red-700 p-2 rounded-md mb-5">
      <p className="text-white font-normal uppercase text-center text-[14px]">
        {mensaje}
      </p>
    </div>
  );
};

export default ErrorForm;
