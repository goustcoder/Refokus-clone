import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Producuts from "./components/Producuts";
import Maruees from "./components/Maruees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='font-["satoshi"] h-full w-screen bg-zinc-800 text-white'>
      <Navbar></Navbar>
      <Work></Work>
      <Stripes></Stripes>
      <Producuts></Producuts>
      <Maruees></Maruees>
      <Cards></Cards>
      <Footer />
    </div>
  );
};

export default App;
