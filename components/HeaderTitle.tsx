import React from "react";

const HeaderTitle = ({
  word1,
  word2,
  className = "",
}: {
  word1: string;
  word2: string;
  className?: string;
}) => {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="font-light inline border-b-2 border-dotted pb-3 text-3xl lg:text-4xl">
        {word1} <span className="font-extrabold ml-1">{word2}</span>
      </h2>
    </div>
  );
};

export default HeaderTitle;
