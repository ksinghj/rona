import { combineReducers } from "redux";

export const globalData = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ globalData });
