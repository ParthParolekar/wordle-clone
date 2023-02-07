import React, { useState, useEffect } from "react";
import { useGame } from "../../context/gameContext/gameContext";

// Types
type GuessProps = {
  guess: string;
  answer: string;
};

type letterColorObj = {
  [key: string]: string;
};

type letterColor = letterColorObj[];

type dictionary = { [key: string]: number };

const Guess = ({ guess, answer }: GuessProps) => {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();

  const [dictionary, setDictionary] = useState<dictionary>(
    [...answer].reduce((obj: dictionary, curr) => {
      if (Object.keys({ ...obj }).includes(curr)) {
        return { ...obj, [curr]: obj[curr] + 1 };
      } else {
        return { ...obj, [curr]: 1 };
      }
    }, {})
  );

  const [letterColor, setLetterColor] = useState<letterColor>([]);

  useEffect(() => {
    let tempLetterColor = letterColor;
    let tempDictionary = dictionary;
    for (let i = 0; i < guess.length; i++) {
      if (answer[i] === guess[i]) {
        tempDictionary = {
          ...tempDictionary,
          [guess[i]]: tempDictionary[guess[i]] - 1,
        };
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#538d4e]" }];
      } else if (answer.includes(guess[i]) && tempDictionary[guess[i]] >= 1) {
        tempDictionary = {
          ...tempDictionary,
          [guess[i]]: tempDictionary[guess[i]] - 1,
        };
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#b59f3b]" }];
      } else if (answer.includes(guess[i]) && tempDictionary[guess[i]] <= 0) {
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
      } else {
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
      }
    }

    for (let i = 0; i < guess.length; i++) {
      if (
        tempDictionary[guess[i]] < 0 &&
        tempLetterColor[i][guess[i]] === "bg-[#b59f3b]"
      ) {
        tempLetterColor[i][guess[i]] = "bg-[#3a3a3c]";
      }
      gameDispatch({
        type: "EDIT_KEYBOARD",
        payload: { key: guess[i], bgcolor: tempLetterColor[i][guess[i]] },
      });
    }

    setDictionary(tempDictionary);
    setLetterColor(tempLetterColor);
  }, [answer, guess]);

  return (
    <div className="mt-8">
      {letterColor.map((letter: any, i: number) => (
        <span
          key={i}
          className={`text-white ${
            Object.entries(letter)[0][1]
          } rounded-lg text-3xl font-mono font-bold py-2 px-4 mx-1`}
        >
          {Object.entries(letter)[0][0]}
        </span>
      ))}
    </div>
  );
};

export default Guess;
