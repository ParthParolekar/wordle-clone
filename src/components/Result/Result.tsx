import React from "react";

import Button from "../Button/Button";
import Info from "../Info/Info";
import { useGame } from "../../context/gameContext/gameContext";

const Result = () => {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();
  const { answer, guesses } = gameState;

  const buttonClickHandler = () => {
    gameDispatch({ type: "RESET" });
  };
  return (
    <div>
      {guesses[guesses.length - 1] === answer && (
        <Info content="You guessed it right! Congrats!" />
      )}
      {guesses.length === 6 && guesses[guesses.length - 1] !== answer && (
        <Info content="You ran out of guesses! Better luck next time" />
      )}
      {(guesses.length === 6 || guesses[guesses.length - 1] === answer) && (
        <div className="text-center">
          <Button content="Play Again" onClickMethod={buttonClickHandler} />
        </div>
      )}
    </div>
  );
};

export default Result;
