import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["stress", "excessive  costs", "counter", "difficulty"];

  return (
    <div className=" flex justify-center items-center h-[10rem]">
      <div>
        <span className="font-bold">Skip the car rental</span>
        <FlipWords words={words} /> <br />
        and enroll on the Turo app
      </div>
    </div>
  );
}

