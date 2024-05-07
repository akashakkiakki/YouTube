import React from "react";
import Button from "./Button";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const ButtonList = () => {
  const dispatch = useDispatch();

  const searchMovies = async (searchText) => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    dispatch(addPopularMovies(json.items));
  };

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
    <div className="flex overflow-x-auto">
      {buttonNames.map((button, index) => (
        <div className="flex" key={index} onClick={() => searchMovies(button)}>
          <Button name={button} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
