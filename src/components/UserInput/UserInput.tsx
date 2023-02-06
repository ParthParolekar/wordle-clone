import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Info from "../Info/Info";
import { useGame } from "../../context/gameContext/gameContext";

const UserInput = () => {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();
  const { answer, guesses, userInput } = gameState;

  return (
    <main className="text-center">
      <div className="my-4 flex flex-row items-center justify-center">
        {userInput.map((letter: string, i: number) => (
          <span
            key={i}
            className={`block text-black dark:text-white border border-black dark:border-white rounded-lg text-3xl font-mono font-bold py-2 px-4 w-12 h-12 mx-1`}
          >
            {letter}
          </span>
        ))}
      </div>
      {[...Array(5 - guesses.length).keys()].map((key) => (
        <div
          className="my-4 flex flex-row items-center justify-center"
          key={key}
        >
          {userInput.map((letter: string, i: number) => (
            <span
              key={i}
              className={`block text-black dark:text-white border border-black dark:border-white rounded-lg text-3xl font-mono font-bold py-2 px-4 w-12 h-12 mx-1`}
            ></span>
          ))}
        </div>
      ))}
    </main>
  );
};

export default UserInput;
