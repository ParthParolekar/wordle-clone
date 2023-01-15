import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components";

function App() {
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
    <div className="font-poppins h-screen bg-gray-300 dark:bg-gray-900 flex justify-center items-center">
      <div className="w-screen md:w-6/12 h-screen border-2 border-solid border-green-500 flex flex-col justify-start items-center">
        <Navbar theme={theme} setTheme={setTheme} />
        <div>dasdadssad</div>
      </div>
    </div>
  );
}

export default App;
