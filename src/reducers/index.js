import { combineReducers } from "redux";

import { GET_GLOBAL_DATA } from "../types";
import { GET_COUNTRY_DATA } from "../types";

export const globalData = (state = {}, action) => {
  switch (action.type) {
    case GET_GLOBAL_DATA:
      const { confirmed, recovered, deaths } = action.payload;
      return {
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
      };
    default:
      return state;
  }
};

export const countryData = (state = {}, action) => {
  switch (action.type) {
    case GET_COUNTRY_DATA:
      const { confirmed, recovered, deaths } = action.payload;
      return {
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
      };
    default:
      return state;
  }
};

export default combineReducers({ globalData, countryData });

// const { action.payload } = { confirmed, recovered }; TODO: Destructure this
