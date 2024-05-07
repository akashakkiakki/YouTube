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
    setShowSuggestions(false);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    dispatch(addPopularMovies(json.items));
  };

  const getSearchSuggestions = async () => {
    if (!searchQuery) return null;
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        if (!isMobileDevice()) getSearchSuggestions();
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
    <div className="flex flex-col">
      <div className="flex justify-between shadow-lg p-5 m-2">
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
        <div className="w-1/2 text-center px-10 hidden sm:block">
          <div>
            <input
              className="w-[70%] border border-gray-200 p-2 rounded-l-full"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
            />
            <button
              onClick={() => searchMovies(searchQuery)}
              className="border border-gray-200 py-2 rounded-r-full bg-gray-100 px-5"
            >
              Search
            </button>
          </div>
          {showSuggestions && (
            <div className="text-start flex justify-center">
              <div className="w-[36%] absolute bg-white shadow-lg py-2 px-5 rounded-xl border border-gray-200">
                {suggestions && (
                  <ul>
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="p-1 m-1 cursor-pointer"
                        onClick={() => searchMovies(suggestion)}
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

      <div className="w-full text-center px-10 block sm:hidden">
        <div>
          <input
            className="w-[60%] border border-gray-200 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <button
            onClick={() => searchMovies(searchQuery)}
            className="border border-gray-200 py-2 rounded-r-full bg-gray-100 px-5"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
