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

    if ((e.target as any).id === "Backspace") {
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
    // gameDispatch({type: "EDIT_KEYBOARD" payload: })
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {keyboard.map((line: KeyboardType[], i: number) => (
        <div className="flex flex-row" key={i}>
          {line.map((key) => (
            <div
              onClick={keyClickHandler}
              key={key.key}
              id={key.key}
              className={`${key.bgcolor} cursor-pointer m-1 px-2  min-w-[30px] h-14 flex justify-center items-center text-white text-xl  rounded-md`}
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
