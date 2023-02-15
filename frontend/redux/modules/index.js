import { combineReducers } from "redux";
import user from "./user";
import streaming from "./streaming";
import funding from "./funding";
import { HYDRATE } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "streaming", "funding"],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ user, streaming, funding })(state, action);
  }
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
