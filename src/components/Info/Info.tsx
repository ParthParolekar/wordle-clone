import React from "react";
type ContentProps = {
  content: string;
};
const Info = ({ content }: ContentProps) => {
  return (
    <h1 className="text-lg text-black dark:text-white text-center my-2">
      {content}
    </h1>
  );
};

export default Info;
