import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  let [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "75%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    

    const imageshow = (arr) => {
      setImages((prev) =>
        prev.map((elem, index) =>
          arr.indexOf(index) === -1
            ? { ...elem, isActive: false }
            : { ...elem, isActive: true }
        )
      );
    };

    switch (Math.floor(data * 100)) {
      case 0:
        imageshow([]);
        break;
      case 2:
        imageshow([0]);
        break;
      case 3:
        imageshow([0, 1]);
        break;
      case 4:
        imageshow([0, 1, 2]);
        break;
      case 6:
        imageshow([0, 1, 2, 3]);
        break;
      case 8:
        imageshow([0, 1, 2, 3, 4]);
        break;
      case 9:
        imageshow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full ">
      <div className="max-w-screen-xl relative mx-auto text-center">
        <h1 className="text-[30vw] leading-none select-none font-medium">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  src={elem.url}
                  alt=""
                  className="w-60 absolute -translate-x-[50%] -translate-y-[50%] rounded-lg"
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
