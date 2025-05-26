import React from "react";

const TopSection = ({ bgImage, title }) => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(${bgImage})no-repeat center center/cover`,
      }}
      className="w-full h-40 flex justify-center align-middle items-center"
    >
      <h1 className="text-5xl text-white h-full pt-14 font-bold">{title}</h1>
    </div>
  );
};

export default TopSection;
