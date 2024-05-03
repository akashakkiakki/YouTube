import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

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
        <input
          className="w-1/2 border border-gray-200 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-200 py-2 rounded-r-full bg-gray-100 px-5">
          Search
        </button>
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
