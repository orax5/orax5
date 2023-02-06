import { combineReducers } from "redux";
import user from "./user";
import streaming from "./streaming";
import funding from "./funding";

const rootReducer = combineReducers({
  user,
  streaming,
  funding,
});

export default rootReducer;
