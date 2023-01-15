import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-4xl text-black dark:text-white font-bold text-center">
      {title}
    </h1>
  );
};

export default Title;
