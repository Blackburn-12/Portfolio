import React from "react";
import Navbar from "./Navbar";
import myimg from "../images/my.png";

const About = () => {
  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col py-2 mt-8 justify-center items-center max-w-screen-lg mx-auto px-4">
        <h1 className="text-center text-4xl font-BebasNeue space-x-1 font-bold text-primary gradient-text">
          About Me
        </h1> 

        <div className="flex justify-center">
          <img
            src={myimg}
            alt="Myself"
            className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-[500px] lg:h-[550px]"
          />
        </div>

        <div className="text-white text-lg leading-relaxed font-Quicksand px-4">
          <p>
            I am a dedicated{" "}
            <span className="text-primary font-semibold">MERN stack developer</span>, 
            with expertise in building dynamic and scalable web applications using{" "}
            <span className="text-primary font-semibold">MongoDB</span>,{" "}
            <span className="text-primary font-semibold">Express</span>,{" "}
            <span className="text-primary font-semibold">React</span>, and{" "}
            <span className="text-primary font-semibold">Node.js</span>.
          </p>
          <p>
            My hands-on experience across the full stack enables me to create robust backend solutions while maintaining seamless, high-performance user interfaces. Whether working on the server side or the client side, I am passionate about delivering well-rounded applications that offer exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
