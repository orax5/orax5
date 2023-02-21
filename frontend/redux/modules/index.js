import { combineReducers } from "redux";

import user from "./user";
import funding from "./funding";

import { HYDRATE } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "funding"],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload
    default:
      return combineReducers({ user, funding })(state, action);
  }
    // // transform state on its way to being serialized and persisted.
    // (inboundState, key) => {
    //   // convert mySet to an Array.
    //   return { ...inboundState, mySet: [...inboundState.mySet] };
    // },
    // // transform state being rehydrated
    // (outboundState, key) => {
    //   // convert mySet back to a Set.
    //   return { ...outboundState, mySet: new Set(outboundState.mySet) };
    // },
    // // define which reducers this transform gets called for.
    // { whitelist: ['someReducer'] }
);

const persistConfig = {
  key: "root",
  storage,
  whitelist : ["users"],
  transforms: [circularTransform],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
// Hello World!
