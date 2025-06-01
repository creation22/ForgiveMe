import React from "react";
import { ContainerTextFlipDemo } from "./FrontHeading";
import TypeBox from "./TypeBox";
import { InfiniteMovingCardsDemo } from "./MovingCard";

const Frontpage = ({ setAnswers }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 space-y-20"> 
      
      
      <div className="pt-10">
        <ContainerTextFlipDemo />
      </div>


      <div>
        <TypeBox setAnswers={setAnswers} />
      </div>

      
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Popular Reflections
        </h1>
        <InfiniteMovingCardsDemo />
      </div>
      
    </div>
  );
};

export default Frontpage;
