import React from "react";

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
  let dictionary: dictionary = [...answer].reduce((obj: dictionary, curr) => {
    if (Object.keys({ ...obj }).includes(curr)) {
      return { ...obj, [curr]: obj[curr] + 1 };
    } else {
      return { ...obj, [curr]: 1 };
    }
  }, {});

  let letterColor: letterColor = [];

  for (let i = 0; i < guess.length; i++) {
    if (answer[i] === guess[i]) {
      dictionary = { ...dictionary, [guess[i]]: dictionary[guess[i]] - 1 };
      letterColor = [...letterColor, { [guess[i]]: "bg-green-500" }];
    } else if (answer.includes(guess[i]) && dictionary[guess[i]] >= 1) {
      dictionary = { ...dictionary, [guess[i]]: dictionary[guess[i]] - 1 };
      letterColor = [...letterColor, { [guess[i]]: "bg-orange-500" }];
    } else if (answer.includes(guess[i]) && dictionary[guess[i]] <= 0) {
      letterColor = [...letterColor, { [guess[i]]: "bg-red-500" }];
    } else {
      letterColor = [...letterColor, { [guess[i]]: "bg-red-500" }];
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (
      dictionary[guess[i]] < 0 &&
      letterColor[i][guess[i]] === "bg-orange-500"
    ) {
      letterColor[i][guess[i]] = "bg-red-500";
    }
  }

  return (
    <div className="my-8">
      {letterColor.map((letter: any, i: number) => (
        <span
          key={i}
          className={`text-black dark:text-white ${
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
