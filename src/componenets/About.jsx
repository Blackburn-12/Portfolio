import React from "react";
import Navbar from "./Navbar";
import myimg from "../images/my.png"
const About = () => {
  return (
    <div className="bg-dark h-screen flex flex-col">
      <Navbar />

      <div>
        <div className="flex flex-col gap-8 mt-8 justify-center items-center max-w-screen-lg mx-auto">
          <h1 className="text-center text-4xl font-BebasNeue space-x-1 font-bold text-primary gradient-text">
            About me
          </h1> 

          <div>
            <img src={myimg} height={550} width={450} alt="" />
          </div>

          <div className="text-white text-lg leading-relaxed font-Quicksand">
            <p>
              As a{" "}
              <span className="text-primary font-semibold font-Quicksand">
                frontend developer
              </span>
              , I specialize in creating responsive and intuitive user
              interfaces. With a strong foundation in HTML, CSS, and JavaScript,
              and extensive experience with modern frameworks like{" "}
              <span className="text-primary font-semibold font-Quicksand">React</span>, I focus
              on building seamless, high-performance web applications.
            </p>
            <p>
              In addition to my frontend skills, I am proficient in the{" "}
              <span className="text-primary font-semibold font-Quicksand">MERN stack</span>{" "}
              (MongoDB, Express, React, Node.js), allowing me to develop
              dynamic, scalable, and robust applications. My hands-on experience
              with these technologies enables me to handle complex backend logic
              while maintaining a fluid and engaging frontend experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
