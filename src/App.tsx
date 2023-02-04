import React, { useEffect, useState } from "react";
import "./App.css";
import { Guesses, Keyboard, Navbar, Result, UserInput } from "./components";
import generateWord from "./utils/generateWord";
import { useGame } from "./context/gameContext/gameContext";

type KeyboardType = { key: string; bgcolor: string; isGuessed: boolean };

function App() {
  // @ts-ignore
  const [gameState, gameDispatch] = useGame();
  console.log(gameState);
  const { answer, guesses } = gameState;
  const [theme, setTheme] = useState<string>("light");

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
    <div className="font-poppins min-h-screen bg-gray-300 dark:bg-gray-900 flex justify-center items-center">
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
