import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";
import { FaSun, FaMoon } from "react-icons/fa";

type NavProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const Navbar = ({ theme, setTheme }: NavProps) => {
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex flex-row items-center justify-between w-full mt-3 px-4">
      <Title title={"Wordle"} />
      <Button
        content={
          theme === "dark" ? (
            <FaSun color="white" size={30} />
          ) : (
            <FaMoon size={30} />
          )
        }
        onClickMethod={handleThemeSwitch}
      />
    </nav>
  );
};

export default Navbar;
