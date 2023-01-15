import React, { useEffect, useState } from "react";
import "./App.css";
import { Guesses, Navbar, Result, UserInput } from "./components";
import generateWord from "./utils/generateWord";

function App() {
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

  console.log(answer);

  return (
    <div className="font-poppins min-h-screen bg-gray-300 dark:bg-gray-900 flex justify-center items-center">
      <div className="w-screen md:w-6/12 min-h-screen flex flex-col justify-start items-center">
        <Navbar theme={theme} setTheme={setTheme} />
        {/* <UserInput answer={answer} guesses={guesses} setGuesses={setGuesses} /> */}
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
      </div>
    </div>
  );
}

export default App;
