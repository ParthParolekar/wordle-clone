import React from "react";

type ButtonProps = {
  content: string | JSX.Element;
  onClickMethod: () => void;
};

const Button = ({ content, onClickMethod }: ButtonProps) => {
  return (
    <button
      className="bg-gray-300 dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
      onClick={onClickMethod}
    >
      {content}
    </button>
  );
};

export default Button;
