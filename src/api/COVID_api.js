import axios from "axios";

export default axios.create({
  baseURL: "https://covid19.mathdro.id/api",
});

// TODO: add Redux code and configure actions to fetch different search queries
