import React from "react";
import { useGame } from "../../context/gameContext/gameContext";

type KeyboardType = { key: string; bgcolor: string; isGuessed: boolean };

const Keyboard = () => {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();
  const { answer, guesses, keyboard, pointer } = gameState;

  const keyClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as any).id.match(/^[a-z]$/)) {
      if (pointer < 5) {
        gameDispatch({
          type: "ADD_USER_INPUT",
          payload: (e.target as any).id,
        });
        gameDispatch({
          type: "INCREMENT_POINTER",
        });
      }
    }

    if ((e.target as any).id === "Back") {
      if (pointer > 0) {
        gameDispatch({ type: "REMOVE_USER_INPUT" });
        gameDispatch({
          type: "DECREMENT_POINTER",
        });
      }
    }

    if ((e.target as any).id === "Enter") {
      if (pointer === 5) {
        gameDispatch({
          type: "ADD_NEW_GUESS",
          payload: gameState.userInput.join(""),
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center absolute bottom-0">
      {keyboard.map((line: KeyboardType[], i: number) => (
        <div className="flex flex-row" key={i}>
          {line.map((key) => (
            <div
              onClick={keyClickHandler}
              key={key.key}
              id={key.key}
              className={`${key.bgcolor} cursor-pointer m-1 px-1  min-w-[20px] h-14 flex justify-center items-center text-white text-[0.6rem] rounded-md sm:min-w-[30px] sm:text-xl`}
            >
              {key.key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
