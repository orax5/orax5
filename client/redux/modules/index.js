import { combineReducers } from "redux";
import user from "./user";

const rootReducer = combineReducers({
  // 여기에 reducer들을 가져온다
  user,
});

export default rootReducer;
