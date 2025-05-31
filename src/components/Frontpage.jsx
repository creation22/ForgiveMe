import React from "react";
import { ContainerTextFlipDemo } from "./FrontHeading";
import TypeBox from "./TypeBox";
import { InfiniteMovingCardsDemo } from "./MovingCard";

const Frontpage = ({ setAnswers }) => {
  return (
    <div>
      <ContainerTextFlipDemo />
      <TypeBox setAnswers={setAnswers} />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Frontpage;
