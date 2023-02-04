import React, { Dispatch, SetStateAction } from "react";
import { useGame } from "../../context/gameContext/gameContext";

type KeyboardType = { key: string; bgcolor: string; isGuessed: boolean };

type KeyboardPropTypes = {
  keyboard: KeyboardType[][];
  setKeyboard: Dispatch<SetStateAction<KeyboardType[][]>>;
};

const Keyboard = () => {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();
  const { answer, guesses, keyboard } = gameState;
  return (
    <div className="flex flex-col items-center justify-center">
      {keyboard.map((line: KeyboardType[]) => (
        <div className="flex flex-row">
          {line.map((key) => (
            <div
              className={`${key.bgcolor} cursor-pointer m-2 w-10 h-14 flex justify-center items-center text-white text-3xl`}
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
