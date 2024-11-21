import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-3 flex items-center justify-between border-b-[1px] border-zinc-700">
     <div className="nleft flex items-center">
     <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-10 ml-20">
        {["Home", "Work", "Culture","","News"].map((elem,index) => (
          elem.length===0 ? <span className="w-[2px] h-7 bg-zinc-700" key={index}></span> :
          <a className="text-sm  flex items-center gap-1.5" key={index} href="#">
          {index===1 && ( <span className="inline-block w-2 h-2 bg-green-500 rounded-full " style={{boxShadow:"rgb(0, 255, 25) 0px 0px 0.55em"}}></span>) }
           {elem}
         </a>
        ))}
      </div>
     </div>
     <Button></Button>
    </div>
  );
};

export default Navbar;
