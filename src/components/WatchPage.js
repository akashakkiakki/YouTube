import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import useRelatedVideo from "../hooks/useRelatedVideo";
import RelatedVideoContainer from "./RelatedVideoContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const relatedVideo = useSelector((store) => store.movies.relatedVideo);
  useRelatedVideo();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center align-middle mt-3">
      <div className="w-full sm:w-[55%] px-5 flex flex-col gap-3">
        <div className="w-full aspect-video">
          <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hidden lg:block">
          <div className="">
            <CommentContainer />
          </div>
          <div className="">
            <LiveChat />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[45%] flex flex-wrap h-[1500px] overflow-y-scroll justify-center">
        {relatedVideo &&
          relatedVideo.map((video) => (
            <Link
              key={video.etag}
              to={
                "/watch?v=" +
                (video?.id?.videoId ? video.id.videoId : video.id) +
                "&channelId=" +
                video?.snippet?.channelId
              }
            >
              <RelatedVideoContainer info={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default WatchPage;
