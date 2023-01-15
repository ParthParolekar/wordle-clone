import React from "react";

type ButtonProps = {
  content: string | JSX.Element;
  onClickMethod: () => void;
};

const Button = ({ content, onClickMethod }: ButtonProps) => {
  return (
    <button
      className="bg-gray-300 dark:bg-gray-900 h-full p-2 mx-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white border-2 border-solid border-gray-900 dark:border-gray-300"
      onClick={onClickMethod}
    >
      {content}
    </button>
  );
};

export default Button;
