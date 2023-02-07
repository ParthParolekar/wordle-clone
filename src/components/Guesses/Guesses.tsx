import React from "react";
import Guess from "../Guess/Guess";
import { useGame } from "../../context/gameContext/gameContext";

const Guesses = () => {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();
  const { answer, guesses, userInput } = gameState;

  return (
    <div>
      {guesses.map((guess: string, i: number) => (
        <Guess key={i} guess={guess} answer={answer} />
      ))}
    </div>
  );
};

export default Guesses;
