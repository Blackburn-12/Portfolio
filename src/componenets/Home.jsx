import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="relative h-screen flex flex-col bg-dark">
        <Navbar />
      <div className="z-10">
      </div>
      <div className="absolute inset-0 top-[64px]"> {/* Adjust the top value if needed */}
        <img
          src="https://i.imgur.com/bahNBEU.gif"
          alt="Background GIF"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative flex flex-1 items-center justify-center z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[160px] xl:text-[220px] font-BebasNeue font-extrabold text-[#edcd4d] leading-none">
            Blackburn
          </h1>
          <p className="text-white font-BebasNeue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Interlinked
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
