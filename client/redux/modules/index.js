import { combineReducers } from "redux";
import user from "./user";
import streaming from "./streaming";

const rootReducer = combineReducers({
  user,
  streaming,
});

export default rootReducer;
