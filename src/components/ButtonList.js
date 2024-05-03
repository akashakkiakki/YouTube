import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Game",
    "Songs",
    "Movie",
    "Live",
    "Comedy",
    "Cricket",
    "News",
    "Punjabi",
    "Valentines",
    "Indian Movies",
  ];

  return (
    <div className="flex">
      {buttonNames.map((button, index) => (
        <div className="flex" key={index}>
          <Button name={button} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
