import covidApi from "../api/COVID_api";

import { GET_GLOBAL_DATA } from "../types";
import { GET_COUNTRY_DATA } from "../types";
// import { countryList } from "../api/countries";

export const getData = () => async dispatch => {
  const response = await covidApi.get("/");

  dispatch({ type: GET_GLOBAL_DATA, payload: response.data });
};

export const getCountryData = country => async dispatch => {
  const response = await covidApi.get(`/countries/${country}`);

  dispatch({ type: GET_COUNTRY_DATA, payload: response.data });
};
