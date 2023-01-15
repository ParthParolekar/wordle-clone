import React, { useState, Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";

type UserInputProps = {
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
};

const UserInput = ({ guesses, setGuesses }: UserInputProps) => {
  const [input, setInput] = useState<string>("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toLowerCase());
  };

  const buttonClickHandler = () => {
    if (input.length !== 5) {
      console.log("error");
    } else {
      setGuesses([...guesses, input]);
    }
  };

  console.log(input, guesses);

  return (
    <main className="mt-20">
      <input
        type="text"
        className="bg-transparent border-2 border-solid rounded-lg border-gray-500 text-black dark:text-white"
        onChange={(e) => inputChangeHandler(e)}
      />
      <Button content={"Enter"} onClickMethod={buttonClickHandler} />
    </main>
  );
};

export default UserInput;
