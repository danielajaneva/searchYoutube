import axios from "axios";

const KEY = "AIzaSyDroZY8ZnhJEPeVXikHu2VyyKQ3hjuDxNA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
