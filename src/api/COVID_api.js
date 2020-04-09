import axios from "axios";

export default axios.create({
  baseURL: "https://covid19.mathdro.id/api/",
});

// import jsonplaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => async (dispatch) => {
//   const response = await jsonplaceholder.get("/posts");

//   dispatch({ type: "FETCH_POSTS", payload: response.data });
// };

// TODO: add Redux code and configure actions to fetch different search queries
