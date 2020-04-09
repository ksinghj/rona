import covidApi from "../api/COVID_api";

export const getData = () => async (dispatch) => {
  const response = await covidApi.get("/");

  dispatch({ type: "GET_DATA", payload: response.data });
};
