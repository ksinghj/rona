import covidApi from "../api/COVID_api";

import { GET_GLOBAL_DATA } from "../types";

export const getData = () => async (dispatch) => {
  const response = await covidApi.get("/");

  dispatch({ type: GET_GLOBAL_DATA, payload: response.data });
};
