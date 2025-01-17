import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-[15%] text-lg hidden sm:block">
      <div className="p-5 shadow-lg h-[900px]">
        <div className="">
          <ul className="">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Shorts</li>
            <li>Videos</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pt-5">Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Live</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pt-5">Popular</h1>
          <ul>
            <li>New Popular</li>
            <li>Year Best</li>
            <li>Live Drama</li>
            <li>Latest News</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
