import React from "react";

const HorizontalLine = ({ className = "" }) => {
  return (
    <div className={`w-full my-16 p-6 border-y-2 bg-accent ${className}`}></div>
  );
};

export default HorizontalLine;
