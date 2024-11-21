import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
          <div className="basis-1/2">
            <h1 className="text-[11.5rem] font-semibold tracking-tight leading-none">
              Refokus.
            </h1>
          </div>
          <div className="basis-1/2 flex gap-4">
            <div className="basis-1/3">
              <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
              {["instagram", "twitter(x?)", "LinkenIn"].map((elem, index) => {
                return (
                  <a className="block mt-2 capitalize text-zinc-600" key={index}>{elem}</a>
                );
              })}
            </div>
            <div className="basis-1/3">
              <h4 className="mb-10 text-zinc-500 ">sitemao</h4>
              {["home", "work", "careers", "contacts"].map((elem, index) => {
                return (
                  <a className="block mt-2 capitalize text-zinc-600" key={index}>{elem}</a>
                );
              })}
            </div>
            <div className="basis-1/2 flex flex-col items-end">
              <p className="text-right">
                Refokus is pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <img
                src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
                alt=""
                className="w-32 mt-10 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
