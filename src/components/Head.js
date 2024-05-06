import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const searchMovies = async (searchText) => {
    console.log('clicied');
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    dispatch(addPopularMovies(json.items));
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu(false));
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2">
      <div className="flex col-span-1 cursor-pointer">
        <img
          className="h-8 pr-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/1002px-Logo_of_YouTube_%282013-2015%29.svg.png?20160628134147"
          alt="logo"
        />
      </div>
      <div className="col-span-10 text-center px-10">
        <div>
          <input
            className="w-1/2 border border-gray-200 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button onClick={() => searchMovies(searchQuery)} className="border border-gray-200 py-2 rounded-r-full bg-gray-100 px-5">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="text-start flex justify-center">
            <div className="w-[41%] absolute bg-white shadow-lg py-2 px-5 rounded-xl border border-gray-200">
              {suggestions && (
                <ul>
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion}
                      className="p-1 m-1 cursor-pointer"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
