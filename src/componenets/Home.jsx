import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import video from "../images/video.mp4";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Importing icons

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-screen flex flex-col bg-dark">
      <Navbar />
      <div className="absolute inset-0 top-[100px]"> {/* Adjust the top value if needed */}
        <video
          ref={videoRef}
          src={video} // Replace with your video URL
          autoPlay
          loop
          className="w-full h-full object-cover"
          muted={isMuted} // Initial muted state
        />
        <div className="absolute inset-0 bg-black opacity-80" /> {/* Dark shade overlay */}
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
      <button
        onClick={toggleSound}
        className="absolute z-50 bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition duration-300"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
};

export default Home;
