import { useEffect } from "react";
import { RELATED_VIDEO_API } from "../utils/constant";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRelatedVideo } from "../utils/moviesSlice";

const useRelatedVideo = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(RELATED_VIDEO_API + searchParams.get("channelId"));
    const json = await data.json();
    dispatch(addRelatedVideo(json.items));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useRelatedVideo;
