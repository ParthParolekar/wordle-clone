import React, { useState, Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import Info from "../Info/Info";

type UserInputProps = {
  answer: string;
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
};

const UserInput = ({ answer, guesses, setGuesses }: UserInputProps) => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setInput(e.target.value.toLowerCase());
  };

  const buttonClickHandler = () => {
    if (input.length !== 5) {
      setError(true);
    } else {
      setGuesses([...guesses, input]);
      setInput("");
    }
  };

  return (
    <main className="mt-10 text-center">
      {error && <Info content="The word should be exactly 5 letter long" />}
      <div>
        <input
          type="text"
          value={input}
          className="bg-transparent border-2 border-solid rounded-lg border-gray-500 text-black dark:text-white"
          onChange={(e) => inputChangeHandler(e)}
        />
        {guesses.length < 6 && guesses[guesses.length - 1] !== answer && (
          <Button content={"Enter"} onClickMethod={buttonClickHandler} />
        )}
      </div>
    </main>
  );
};

export default UserInput;
