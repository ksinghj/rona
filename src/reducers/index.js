import { combineReducers } from "redux";

import { GET_GLOBAL_DATA } from "../types";

export const globalData = (state = {}, action) => {
  switch (action.type) {
    case GET_GLOBAL_DATA:
      console.log(action.payload.confirmed.value); // returns int value (expected)
      return {
        confirmed: action.payload.confirmed.value,
        recovered: action.payload.recovered.value,
        deaths: action.payload.deaths.value,
      };
    default:
      return state;
  }
};

export default combineReducers({ globalData });

// const { action.payload } = { confirmed, recovered }; TODO: Destructure this
