import { combineReducers } from "redux";
import user from "./user";
import streaming from "./streaming";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;


    default:
      return combineReducers({ user,streaming })(state, action);
  }
};

export default rootReducer;
