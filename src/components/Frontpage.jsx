import React from "react";
import { ContainerTextFlipDemo } from "./FrontHeading";
import TypeBox from "./TypeBox";
import { InfiniteMovingCardsDemo } from "./MovingCard";

const Frontpage = ({ setAnswers }) => {
  return (
    <div>
      <ContainerTextFlipDemo />
      <TypeBox setAnswers={setAnswers} />
      <h1 className="text-5xl font-bold flex items-center justify-center m-14"> Our Top Users</h1>
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Frontpage;
