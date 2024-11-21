import React from "react";
import { motion } from "motion/react";

const Maruee = ({ image ,dir}) => {
  return (
    <div className="flex w-full gap-10 overflow-hidden py-8">
      <motion.div 
      initial={{x:dir==="left" ? "0" :"-100%"}}
      animate={{x:dir==="left" ? "-100%" :"0"}}
      transition={{ease:"linear",duration:15,repeat:Infinity}}
      
      className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {image.map((elem, index) => (
          <img src={elem} key={index} className="" />
        ))}
      </motion.div>
      <motion.div 
      initial={{x:dir==="left" ? "0" :"-100%"}}
      animate={{x:dir==="left" ? "-100%" :"0"}}
      transition={{ease:"linear",duration:15,repeat:Infinity}}
      
      className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {image.map((elem, index) => (
          <img src={elem} key={index} className="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Maruee;
