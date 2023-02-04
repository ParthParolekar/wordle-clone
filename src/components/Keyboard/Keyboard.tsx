import React, { Dispatch, SetStateAction } from "react";

type KeyboardType = { key: string; bgcolor: string; isGuessed: boolean };

type KeyboardPropTypes = {
  keyboard: KeyboardType[][];
  setKeyboard: Dispatch<SetStateAction<KeyboardType[][]>>;
};

const Keyboard = ({ keyboard, setKeyboard }: KeyboardPropTypes) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {keyboard.map((line) => (
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
