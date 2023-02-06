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
      letterColor = [...letterColor, { [guess[i]]: "bg-[#538d4e]" }];
    } else if (answer.includes(guess[i]) && dictionary[guess[i]] >= 1) {
      dictionary = { ...dictionary, [guess[i]]: dictionary[guess[i]] - 1 };
      letterColor = [...letterColor, { [guess[i]]: "bg-[#b59f3b]" }];
    } else if (answer.includes(guess[i]) && dictionary[guess[i]] <= 0) {
      letterColor = [...letterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
    } else {
      letterColor = [...letterColor, { [guess[i]]: "bg-[#3a3a3c]" }];
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (
      dictionary[guess[i]] < 0 &&
      letterColor[i][guess[i]] === "bg-[#b59f3b]"
    ) {
      letterColor[i][guess[i]] = "bg-[#3a3a3c]";
    }
  }

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
