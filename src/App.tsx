import React, { useEffect, useState } from "react";
import "./App.css";
import { Guesses, Keyboard, Navbar, Result, UserInput } from "./components";
import { useGame } from "./context/gameContext/gameContext";

function App() {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();
  // console.log(gameState);
  const { answer, guesses, keyboard, userInput, pointer } = gameState;
  const [theme, setTheme] = useState<string>("light");

  const detectKey = (e: any) => {
    if (e.key.match(/^[a-z]$/)) {
      if (pointer < 5) {
        gameDispatch({
          type: "ADD_USER_INPUT",
          payload: e.key,
        });
        gameDispatch({
          type: "INCREMENT_POINTER",
        });
      }
    }

    if (e.key === "Backspace") {
      if (pointer > 0) {
        gameDispatch({ type: "REMOVE_USER_INPUT" });
        gameDispatch({
          type: "DECREMENT_POINTER",
        });
      }
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="font-poppins min-h-screen bg-gray-300 dark:bg-gray-900 flex justify-center items-center"
      // onKeyDown={detectKey}
      // tabIndex={-1}
    >
      <div className="w-screen md:w-6/12 min-h-screen flex flex-col justify-start items-center">
        <Navbar theme={theme} setTheme={setTheme} />

        {guesses.length < 6 && guesses[guesses.length - 1] !== answer && (
          <UserInput />
        )}
        <Guesses />
        <Result />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
