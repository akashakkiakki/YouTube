import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.movies.popularMovies);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(addPopularMovies(json.items));
  };

  useEffect(() => {
    if (!videos) getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {/* <HigherOrderComponent info={videos[0]} /> */}
      {videos &&
        videos.map((video, index) => (
          <Link
            key={index}
            to={
              "/watch?v=" +
              (video?.id?.videoId ? video.id.videoId : video.id) +
              "&channelId=" +
              video?.snippet?.channelId
            }
          >
            <div>
              <VideoCard info={video} />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
