import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const snippet = info?.snippet;

  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;