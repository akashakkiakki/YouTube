const GOOGLE_API_KEY = "AIzaSyAH7yMuNgG6FbsO10MlbjS1oZAiexBjknY";
// const GOOGLE_API_KEY = "AIzaSyAH7yMuNgG6FbsO10MlbjS1oZAiexBjknYskdjkv";
export const YOUTUBE_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&q=";

  export const YOUTUBE_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY + "&q=";