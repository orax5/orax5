import { combineReducers } from "redux";

import user from "./user";
// import streaming from "./streaming";
import funding from "./funding";
import contracts from "./contracts";

import { HYDRATE } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "funding", "contracts"],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ user, funding, contracts })(state, action);
  }
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
