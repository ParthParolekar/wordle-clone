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

  // let dictionary: dictionary = [...answer].reduce((obj: dictionary, curr) => {
  //   if (Object.keys({ ...obj }).includes(curr)) {
  //     return { ...obj, [curr]: obj[curr] + 1 };
  //   } else {
  //     return { ...obj, [curr]: 1 };
  //   }
  // }, {});

  // let letterColor: letterColor = [];

  useEffect(() => {
    let tempLetterColor = letterColor;
    let tempDictionary = dictionary;
    for (let i = 0; i < guess.length; i++) {
      if (answer[i] === guess[i]) {
        // dictionary = { ...dictionary, [guess[i]]: dictionary[guess[i]] - 1 };
        // letterColor = [...letterColor, { [guess[i]]: "bg-[#538d4e]" }];
        tempDictionary = {
          ...tempDictionary,
          [guess[i]]: tempDictionary[guess[i]] - 1,
        };
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#538d4e]" }];
        // setDictionary({ ...dictionary, [guess[i]]: dictionary[guess[i]] - 1 });
        // setLetterColor([...letterColor, { [guess[i]]: "bg-[#538d4e]" }]);
      } else if (answer.includes(guess[i]) && tempDictionary[guess[i]] >= 1) {
        // dictionary = { ...dictionary, [guess[i]]: dictionary[guess[i]] - 1 };
        // letterColor = [...letterColor, { [guess[i]]: "bg-[#b59f3b]" }];
        tempDictionary = {
          ...tempDictionary,
          [guess[i]]: tempDictionary[guess[i]] - 1,
        };
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#b59f3b]" }];
        // setDictionary({ ...dictionary, [guess[i]]: dictionary[guess[i]] - 1 });
        // setLetterColor([...letterColor, { [guess[i]]: "bg-[#b59f3b]" }]);
      } else if (answer.includes(guess[i]) && tempDictionary[guess[i]] <= 0) {
        // letterColor = [...letterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
        // setLetterColor([...letterColor, { [guess[i]]: "bg-[#3a3a3c]" }]);
      } else {
        // letterColor = [...letterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
        tempLetterColor = [...tempLetterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
        // setLetterColor([...letterColor, { [guess[i]]: "bg-[#3a3a3c]" }]);
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

    // setLetterColor(
    //   letterColor.map((letterObj, j) =>
    //     dictionary[guess[j]] < 0 && letterColor[j][guess[j]] === "bg-[#b59f3b]"
    //       ? { ...letterObj, [letterObj[guess[j]]]: "#3a3a3c" }
    //       : { ...letterObj }
    //   )
    // );
    setDictionary(tempDictionary);
    setLetterColor(tempLetterColor);
  }, [answer, guess]);

  // for (let i = 0; i < guess.length; i++) {
  //   if (
  //     dictionary[guess[i]] < 0 &&
  //     letterColor[i][guess[i]] === "bg-[#b59f3b]"
  //   ) {
  //     letterColor[i][guess[i]] = "bg-[#3a3a3c]";

  //   }
  //   console.log(Object.keys(letterColor[i]), letterColor[i][guess[i]]);
  // }

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
