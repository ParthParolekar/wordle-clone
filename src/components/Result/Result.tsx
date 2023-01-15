import React, { Dispatch, SetStateAction } from "react";
import generateWord from "../../utils/generateWord";
import Button from "../Button/Button";
import Info from "../Info/Info";
type ResultProps = {
  answer: string;
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  setAnswer: Dispatch<SetStateAction<string>>;
};
const Result = ({ answer, guesses, setGuesses, setAnswer }: ResultProps) => {
  const buttonClickHandler = () => {
    setGuesses([]);
    setAnswer(generateWord());
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
