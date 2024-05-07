import React from "react";

const RelatedVideoContainer = ({ info }) => {
  if (!info) return null;

  const snippet = info?.snippet;

  const { thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-full sm:w-[270px] shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
      </ul>
    </div>
  );
};

export default RelatedVideoContainer;
