import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Producuts = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and demonstrate how migration data translates into real estate.",
      live: true,
      case: false,
      bgcolor: "#F5F5DC", // Beige
      gradient: "bg-gradient-to-r from-[#F5F5DC] to-[#D8BFD8]" // Beige to Thistle
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends, and design.",
      live: true,
      case: true,
      bgcolor: "#D8BFD8", // Thistle
      gradient: "bg-gradient-to-r from-[#D8BFD8] to-[#ADD8E6]" // Thistle to Light Blue
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards, and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
      bgcolor: "#ADD8E6", // Light Blue
      gradient: "bg-gradient-to-r from-[#ADD8E6] to-[#FFD700]" // Light Blue to Gold
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: false,
      bgcolor: "#FFD700", // Gold
      gradient: "bg-gradient-to-r from-[#FFD700] to-[#98FB98]" // Gold to Pale Green
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: false,
      bgcolor: "#98FB98", // Pale Green
      gradient: "bg-gradient-to-r from-[#98FB98] to-[#F5F5DC]" // Pale Green to Beige
    }
  ];
  

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
    console.log(pos);
  };

  return (
    <>
      <div className="mt-32 relative">
        {products.map((elem, index) => {
          return (
            <Product
              data={elem}
              key={index}
              i={index}
              moverfunc={mover}
            ></Product>
          );
        })}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="absolute w-[32rem] h-[23rem] left-[45%] overflow-hidden"
          >
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-sky-200 rounded-2xl overflow-hidden"
            >
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-sky-300 rounded-2xl overflow-hidden"
            >
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-sky-400 rounded-2xl overflow-hidden"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-sky-500 rounded-2xl overflow-hidden"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://i.imgur.com/ItWAopM.mp4"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-sky-600 rounded-2xl overflow-hidden"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://i.imgur.com/WfiAmyb.mp4"
              ></video>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Producuts;
