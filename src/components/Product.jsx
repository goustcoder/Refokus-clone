import React, { useState } from "react";
import Button from "./Button";

const Product = ({ data, i, moverfunc }) => {
  const [bg, setBg] = useState(null);

  const change = () => {
    setBg(data.gradient); // Set the dynamic gradient
  };

  const exit = () => {
    setBg(null); // Reset the background gradient when mouse leaves
  };

  return (
    <>
      <div
        onMouseOver={change}
        onMouseOut={exit}
        onMouseEnter={() => moverfunc(i)}
        className={`w-full py-20 h-[23rem] text-white`}
       
      >
        <div
           // Handle mouse enter
          className="max-w-screen-xl mx-auto flex justify-between items-center"
        >
          <h1 className="text-6xl capitalize font-semibold">{data.title}</h1>
          <div className="dets w-1/4">
            <p className="mb-10">{data.description}</p>
            <div className="flex items-center gap-5">
              {data.live && <Button />}
              {data.case && <Button title="Case study" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
