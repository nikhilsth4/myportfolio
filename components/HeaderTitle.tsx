import React from "react";

const HeaderTitle = ({ word1, word2 }: { word1: string; word2: string }) => {
  return (
    <div className="mb-16">
      <h2 className="font-light inline border-b-2 border-dotted pb-3 text-3xl lg:text-4xl">
        {word1} <span className="font-extrabold ml-1">{word2}</span>
      </h2>
    </div>
  );
};

export default HeaderTitle;
