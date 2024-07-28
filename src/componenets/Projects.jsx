import React from "react";
import { Navbar, Card } from "./index";

const Projects = () => {
  return (
    <>
      <div className="bg-dark min-h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-col gap-8 mt-8 justify-center items-center">
          <h1 className="text-center text-4xl font-BebasNeue space-x-1 font-bold text-primary gradient-text">
            Made with React
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
            <Card
              name={"Burnflix"}
              description={"Movies website"}
              link={"https://burnflix.vercel.app/"}
            />
            <Card
              name={"GitFinder"}
              description={"Find who you want!"}
              link={"https://gitfinder-six-theta.vercel.app/"}
            />
            <Card
              name={"Weather App"}
              description={"Tells weather"}
              link={"https://weather-app-ten-tawny-90.vercel.app/"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8 justify-center items-center">
          <h1 className="text-center text-4xl font-BebasNeue space-x-1 font-bold text-primary gradient-text">
            Made with Vanila js
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
            <Card
              name={"Stopwatch"}
              description={"Tells time!"}
              link={"https://blackburn-12.github.io/Stopwatch/"}
            />
            <Card
              name={"Calculator"}
              description={"Can calculate!"}
              link={"https://calculator-gules-mu.vercel.app/"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8 mb-8 justify-center items-center">
          <h1 className="text-center text-4xl font-BebasNeue space-x-1 font-bold text-primary gradient-text">
            Made with MERN
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
            <Card
              name={"Todoapp"}
              description={"Makes list!"}
              link={"https://todoappbb.vercel.app/"}
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
