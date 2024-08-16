import React from "react";
import Navbar from "./Navbar";
import { AuroraBackground } from "./ui/aurora-background";
import { SiReact, SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import "./Home.css";
const Home = () => {
  return (
    <div className="relative h-screen flex flex-col bg-dark">
      <Navbar />
      <AuroraBackground>
        <div className="relative flex flex-1 items-center justify-center z-10">
          <div className="text-center ">
            <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[160px] xl:text-[220px] font-BebasNeue font-extrabold text-[#edcd4d] leading-none animate-glowing">
              Blackburn
            </h1>
            <p className="text-white font-BebasNeue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Interlinked
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center text-center gap-4 text-white mt-4 text-2xl">
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Home;
