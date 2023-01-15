import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

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

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="h-screen bg-gray-300 dark:bg-gray-900 flex justify-center items-center">
      <button
        className="bg-gray-300 dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? <FaSun color="white" /> : <FaMoon />}
      </button>
    </div>
  );
}

export default App;
