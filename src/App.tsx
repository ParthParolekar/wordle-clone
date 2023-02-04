import React, { useEffect, useState } from "react";
import "./App.css";
import { Guesses, Keyboard, Navbar, Result, UserInput } from "./components";
import generateWord from "./utils/generateWord";

type KeyboardType = { key: string; bgcolor: string; isGuessed: boolean };

function App() {
  const [keyboard, setKeyboard] = useState<KeyboardType[][]>([
    [
      { key: "q", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "w", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "e", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "r", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "t", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "y", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "u", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "i", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "o", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "p", bgcolor: "bg-gray-500", isGuessed: false },
    ],
    [
      { key: "a", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "s", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "d", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "f", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "g", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "h", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "j", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "k", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "l", bgcolor: "bg-gray-500", isGuessed: false },
    ],
    [
      { key: "z", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "x", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "c", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "v", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "b", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "n", bgcolor: "bg-gray-500", isGuessed: false },
      { key: "m", bgcolor: "bg-gray-500", isGuessed: false },
    ],
  ]);
  const [answer, setAnswer] = useState<string>(generateWord());
  const [theme, setTheme] = useState<string>("light");
  const [guesses, setGuesses] = useState<string[]>([]);

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
          <UserInput
            answer={answer}
            guesses={guesses}
            setGuesses={setGuesses}
          />
        )}
        <Guesses guesses={guesses} answer={answer} />
        <Result
          answer={answer}
          guesses={guesses}
          setGuesses={setGuesses}
          setAnswer={setAnswer}
        />
        <Keyboard keyboard={keyboard} setKeyboard={setKeyboard} />
      </div>
    </div>
  );
}

export default App;
