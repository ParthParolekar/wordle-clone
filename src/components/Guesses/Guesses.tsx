import React from "react";
import Guess from "../Guess/Guess";

type GuessesProps = {
  guesses: string[];
  answer: string;
};
const Guesses = ({ guesses, answer }: GuessesProps) => {
  return (
    <div>
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} answer={answer} />
      ))}
    </div>
  );
};

export default Guesses;
