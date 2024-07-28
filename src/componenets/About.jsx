import React from "react";
import Navbar from "./Navbar";
import myimg from "../images/my.png"
const About = () => {
  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col py-2 mt-8 justify-center items-center max-w-screen-lg mx-auto px-4">
        <h1 className="text-center text-4xl font-BebasNeue space-x-1 font-bold text-primary gradient-text">
          About me
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
            As a{" "}
            <span className="text-primary font-semibold">
              frontend developer
            </span>
            , I specialize in creating responsive and intuitive user interfaces. With a strong foundation in HTML, CSS, and JavaScript, and extensive experience with modern frameworks like{" "}
            <span className="text-primary font-semibold">React</span>, I focus on building seamless, high-performance web applications.
          </p>
          <p>
            In addition to my frontend skills, I am proficient in the{" "}
            <span className="text-primary font-semibold">MERN stack</span>{" "}
            (MongoDB, Express, React, Node.js), allowing me to develop dynamic, scalable, and robust applications. My hands-on experience with these technologies enables me to handle complex backend logic while maintaining a fluid and engaging frontend experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
