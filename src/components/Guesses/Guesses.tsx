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
      <div className="my-8">
        {userInput.map((letter: string, i: number) => (
          <span
            className={`text-black dark:text-white border border-black dark:border-white rounded-lg text-3xl font-mono font-bold py-2 px-4 mx-1`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Guesses;
